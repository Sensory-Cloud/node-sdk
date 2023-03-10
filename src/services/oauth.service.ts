import { Config } from '../config';
import { TokenRequest } from '../generated/oauth/oauth_pb';
import { OauthServiceClient } from '../generated/oauth/oauth_grpc_pb';
import { CryptoService } from './crypto.service';
import {
  DeviceResponse,
  DeviceGetWhoAmIRequest,
  EnrollDeviceRequest,
  RenewDeviceCredentialRequest,
} from '../generated/v1/management/device_pb';

import { v4 } from 'uuid';
import { DeviceServiceClient } from '../generated/v1/management/device_grpc_pb';
import { GenericClient } from '../generated/common/common_pb';
import * as grpc from '@grpc/grpc-js';

/** Manages OAuth interactions with Sensory Cloud */
export interface IOauthService {
  /**
   * @returns the underlying credential store used by the service
   */
  getCredentialStore(): ISecureCredentialStore;

  /**
   * Creates a new cryptographically random OAuth client
   * @returns OauthClient
   */
  generateCredentials(): OauthClient;

  /**
   * Obtains an OAuth token used for API authentication
   * @returns Promise
   */
  getToken(): Promise<OauthToken>;

  /**
   * Register credentials provided by the attached SecureCredentialStore to Sensory Cloud. This function should only be called
   * once per unique credential pair. An error will be thrown if registration fails.
   *
   * @param  {string} deviceName - The friendly name of the registering device
   * @param  {string} credential - The credential configured on the Sensory Cloud server
   * @returns Promise
   */
  register(
    deviceName: string,
    credential: string
  ): Promise<DeviceResponse.AsObject>;

  /**
   * Renews the credentials stored in the attached SecureCredentialStore. This should be called once the device key has expired.
   *
   * @param credential - The credential configured on the Sensory Cloud server
   * @returns Promise
   */
  renewDeviceCredential(credential: string): Promise<DeviceResponse.AsObject>;
}

/** Holds OAuth token and expiration */
export type OauthToken = {
  token: string;
  expires: Date;
};

/** Holds OAuth clientId and secret */
export type OauthClient = {
  clientId: string;
  clientSecret: string;
};

/** Securely serves credentials */
export interface ISecureCredentialStore {
  saveCredentials(clientId: string, clientSecret: string): void;
  getClientId(): Promise<string>;
  getClientSecret(): Promise<string>;
}

/** Service to manage all OAuth-related functions */
export class OauthService implements IOauthService {
  constructor(
    private readonly credentialStore: ISecureCredentialStore,
    private oauthClient: OauthServiceClient | undefined = undefined,
    private deviceClient: DeviceServiceClient | undefined = undefined
  ) {}

  /**
   * @returns the underlying credential store used by the service
   */
  getCredentialStore(): ISecureCredentialStore {
    return this.credentialStore;
  }

  /**
   * Can be called to generate secure and guaranteed unique credentials.
   * Should be used the first time the SDK registers and OAuth token with the cloud.
   *
   * @returns OauthClient
   */
  public generateCredentials(): OauthClient {
    return {
      clientId: v4(),
      clientSecret: CryptoService.getSecureRandomString(26),
    };
  }

  /**
   * Gets information about the current device. The device information is
   * inferred via the OAuth token passed in.
   *
   * @returns Promise - containing information about the device
   */
  public async getWhoAmI(): Promise<DeviceResponse.AsObject> {
    const meta = new grpc.Metadata();
    const token = await this.getToken();

    meta.set('Authorization', `Bearer ${token.token}`);

    return new Promise<DeviceResponse.AsObject>((resolve, reject) => {
      const request = new DeviceGetWhoAmIRequest();

      this.getDeviceClient().getWhoAmI(request, meta, async (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }

  /**
   * Obtains an Oauth JWT from Sensory Cloud.
   * @returns Promise - OAuth JWT and expiration
   */
  public async getToken(): Promise<OauthToken> {
    const clientId = await this.credentialStore.getClientId();
    if (!clientId) {
      throw Error('clientId not set in credential store');
    }

    const clientSecret = await this.credentialStore.getClientSecret();
    if (!clientSecret) {
      throw Error('client secret not set in credential store');
    }

    const now = new Date();

    return new Promise<OauthToken>((resolve, reject) => {
      const request = new TokenRequest();
      request.setClientid(clientId.trim());
      request.setSecret(clientSecret);

      this.getOauthClient().getToken(request, (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        const token = res.getAccesstoken();
        const expires = new Date(now.getTime() + res.getExpiresin() * 1000);
        return resolve({ token, expires });
      });
    });
  }

  /**
   * Register credentials provided by the attached SecureCredentialStore to Sensory Cloud. This function should only be called
   * once per unique credential pair. An error will be thrown if registration fails.
   *
   * @param  {string} deviceName - The friendly name of the registering device
   * @param  {string} credential - The credential configured on the Sensory Cloud server
   * @returns Promise
   */
  public async register(
    deviceName: string,
    credential: string
  ): Promise<DeviceResponse.AsObject> {
    const config = Config.getSharedConfig();
    const clientId = await this.credentialStore.getClientId();
    if (!clientId) {
      throw Error('clientId not set in credential store');
    }

    const clientSecret = await this.credentialStore.getClientSecret();
    if (!clientSecret) {
      throw Error('client secret not set in credential store');
    }

    const deviceId = config.deviceId;

    const request = new EnrollDeviceRequest();
    request.setDeviceid(deviceId);
    request.setName(deviceName);

    request.setCredential(credential);
    request.setTenantid(config.tenantId);

    const client = new GenericClient();
    client.setClientid(clientId);
    client.setSecret(clientSecret);

    request.setClient(client);

    return new Promise<DeviceResponse.AsObject>((resolve, reject) => {
      this.getDeviceClient().enrollDevice(request, (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }

        return resolve(res.toObject());
      });
    });
  }

  /**
   * Renews the credentials stored in the attached SecureCredentialStore. This should be called once the device key has expired.
   *
   * @param credential - The credential configured on the Sensory Cloud server
   * @returns Promise
   */
  public async renewDeviceCredential(
    credential: string
  ): Promise<DeviceResponse.AsObject> {
    const config = Config.getSharedConfig();

    const clientId = await this.credentialStore.getClientId();
    if (!clientId) {
      throw Error('clientId not set in credential store');
    }

    const request = new RenewDeviceCredentialRequest();
    request.setDeviceid(config.deviceId);
    request.setClientid(clientId);
    request.setTenantid(config.tenantId);
    request.setCredential(credential);

    return new Promise<DeviceResponse.AsObject>((resolve, reject) => {
      this.getDeviceClient().renewDeviceCredential(request, (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }

        return resolve(res.toObject());
      });
    });
  }

  private getOauthClient(): OauthServiceClient {
    if (this.oauthClient == undefined) {
      const credentials = Config.getSharedConfig().isSecure
        ? grpc.credentials.createSsl()
        : grpc.credentials.createInsecure();
      this.oauthClient = new OauthServiceClient(Config.getHost(), credentials);
    }
    return this.oauthClient;
  }

  private getDeviceClient(): DeviceServiceClient {
    if (this.deviceClient == undefined) {
      this.deviceClient = new DeviceServiceClient(
        Config.getHost(),
        grpc.credentials.createSsl()
      );
    }
    return this.deviceClient;
  }

  public getCallCredentials(): grpc.ChannelCredentials {
    const callCredentials = grpc.credentials.createFromMetadataGenerator(
      async (_, cb) => {
        try {
          const metadata = new grpc.Metadata();
          const token = await this.getToken();
          metadata.set('Authorization', `Bearer ${token}`);
          cb(null, metadata);
        } catch (err) {
          cb(err);
        }
      }
    );

    if (Config.getSharedConfig().isSecure) {
      return grpc.credentials.combineChannelCredentials(
        grpc.credentials.createSsl(),
        callCredentials
      );
    } else {
      return grpc.credentials.combineChannelCredentials(
        grpc.credentials.createInsecure(),
        callCredentials
      );
    }
  }
}
