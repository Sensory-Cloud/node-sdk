import * as fs from 'fs';

/** Configuration class to hold SDK configurations */
export class Config {
  /** Shared configuration object. This should not be directly set. Instead `Initializer.initialize` should be called */
  private static sharedConfig: SDKInitConfig;

  // initialize with a .env file
  public static initialize(envFilePath: string): SDKInitConfig {
    const iniFile = fs.readFileSync(envFilePath, 'utf8');

    // Create new config
    const config = {} as SDKInitConfig;

    // Parse config
    const configLines = iniFile.split('\n').filter((l) => l.includes('='));
    for (const line of configLines) {
      const keyValue = line.split('=');
      switch (keyValue[0]) {
        case 'fullyQualifiedDomainName':
          config.fullyQualifiedDomainName = keyValue[1];
          break;
        case 'tenantID':
          config.tenantId = keyValue[1];
          break;
        case 'credential':
          config.credential = keyValue[1];
          break;
        case 'enrollmentType':
          config.enrollmentType = EnrollmentType[keyValue[1]];
          break;
        case 'deviceID':
          config.deviceId = keyValue[1];
          break;
        case 'deviceName':
          config.deviceName = keyValue[1];
          break;
        case 'isSecure':
          config.isSecure = keyValue[1] === 'true';
          break;
      }
    }

    this.sharedConfig = config;
    return this.sharedConfig;
  }

  // initializeWithConfig allows you to initialize directly with a configuration object.
  public static initializeWithConfig(config: SDKInitConfig): SDKInitConfig {
    this.sharedConfig = config;
    return this.sharedConfig;
  }

  /** Default language code used for audio calls */
  public static defaultLanguageCode = 'en_US';

  /**
   * @returns the shared configuration object
   */
  public static getSharedConfig(): SDKInitConfig {
    if (!this.sharedConfig) {
      throw new Error('shared config was not set. Did you forget to call initialize()?');
    }

    return this.sharedConfig;
  }

  /**
   * @returns The host for the configured Sensory Cloud server in the form "https://sensorycloud.ai"
   */
  public static getHost(): string {
    return this.sharedConfig.fullyQualifiedDomainName;
  }
}

/** The authentication required for device enrollment */
export enum EnrollmentType {
  /** No authentication required to enroll new devices */
  none = 'none',
  /** Devices are enrolled via a shared secret (i.e. passwords) */
  sharedSecret = 'sharedSecret',
  /** Devices are enrolled via signed JWTs */
  jwt = 'jwt',
}

/** All configurations that are required to initialize the Sensory Cloud SDK */
export type SDKInitConfig = {
  /** The fully qualified domain name of the Sensory Cloud Server to communicate with in the form "sensorycloud.ai" */
  fullyQualifiedDomainName: string;
  /** Tells if the SDK should use a secure connection to the Sensory Cloud server or not */
  isSecure: boolean;
  /** The tenant ID to use during device enrollment */
  tenantId: string;
  /**
   * The level of authentication required to enroll new devices into the Sensory Cloud Server
   * If the device has already been enrolled during a previous session, this field is ignored
   */
  enrollmentType: EnrollmentType;
  /**
   * Credential for device enrollment
   * Depending on the `enrollmentType` this may be blank, the shared secret, or the private key to create a JWT with
   * If the device has already been enrolled during a previous session, this field is ignored
   */
  credential: string;
  /** Unique identifier for the current device */
  deviceId: string;
  /** Name of the enrolling device */
  deviceName: string;
};

/** key values that the init file should have values for */
export enum SDKConfigKeys {
  fqdn = 'fullyQualifiedDomainName',
  isSecure = 'isSecure',
  tenantId = 'tenantID',
  enrollmentType = 'enrollmentType',
  credential = 'credential',
  deviceId = 'deviceID',
  deviceName = 'deviceName',
}
