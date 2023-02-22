import { Config } from '../config';
import { IOauthService } from '../services/oauth.service';

import * as grpc from '@grpc/grpc-js';

/** Manages the rotation and injection of OAuth JWTs into requests */
export interface ITokenManager {
  /**
   * Get a token.
   * @returns Promise<string> - the token
   */
  getToken(): Promise<string>;

  /**
   * Get Grpc client credentials
   * @returns grpc.ChannelCredentials
   */
  getCallCredentials(): grpc.ChannelCredentials;
}

/** Manages the rotation and injection of OAuth JWTs into grpc requests */
export class TokenManager implements ITokenManager {
  private readonly expiresBufferSeconds = 60 * 60; // 1 hour

  private token?: string;
  private expires?: Date;

  constructor(private readonly oauthService: IOauthService) {
    // , private readonly envPath: string
    // const iniFile = fs.readFileSync(envPath,'utf8');
  }

  /**
   * Gets a cached local token if the token exists and is not expired. Otherwise, requests a new token from Sensory Cloud.
   * @returns Promise - containing the token
   */
  public async getToken(): Promise<string> {
    if (this.token && this.expires && new Date() < this.expires) {
      return this.token;
    }

    const oauthToken = await this.oauthService.getToken();
    this.setToken(oauthToken.token, oauthToken.expires);

    return oauthToken.token;
  }
  /**
   * A helper function for grpc calls. Returns the getToken() call packed into grpc Metadata.
   * @returns Promise<grpc.Metadata>
   */
  public async getAuthorizationMetadata(): Promise<grpc.Metadata> {
    const meta = new grpc.Metadata();
    const token = await this.getToken();

    meta.set('Authorization', `Bearer ${token}`);
    return meta;
  }

  public getCallCredentials(): grpc.ChannelCredentials {
    const callCredentials = grpc.credentials.createFromMetadataGenerator(
      async (_, cb) => {
        try {
          const metadata = await this.getAuthorizationMetadata();
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

  private setToken(token: string, expires: Date) {
    this.token = token;
    this.expires = new Date(
      expires.getTime() - this.expiresBufferSeconds * 1000
    );
  }
}
