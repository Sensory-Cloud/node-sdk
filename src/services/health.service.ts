import { Config } from '../config';
import { ServerHealthResponse } from '../generated/common/common_pb';
import { HealthRequest } from '../generated/health/health_pb';
import { HealthServiceClient } from '../generated/health/health_grpc_pb';

import * as grpc from '@grpc/grpc-js';

/** Service to handle all server health functions */
export class HealthService {
  constructor(
    private healthClient: HealthServiceClient | undefined = undefined,
  ) {}

  /**
   * Get the health status of the cloud endpoint defined in Config
   * @returns Promise - including the health status
   */
  public async getHealth(): Promise<ServerHealthResponse.AsObject> {
    return new Promise<ServerHealthResponse.AsObject>((resolve, reject) => {
      this.getHealthClient().getHealth(new HealthRequest(), (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }

  private getHealthClient(): HealthServiceClient {

    if (this.healthClient == undefined) {
      this.healthClient = new HealthServiceClient(
        Config.getHost(),
        grpc.credentials.createSsl()
      );
    }
    return this.healthClient;
  }
}
