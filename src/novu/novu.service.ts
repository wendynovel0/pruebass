// src/novu/novu.service.ts
import { Injectable } from '@nestjs/common';
import { Novu } from '@novu/node';

@Injectable()
export class NovuService {
  private novu: Novu;

  constructor() {
    const apiKey = process.env.NOVU_API_KEY;

    if (!apiKey) {
      throw new Error('NOVU_API_KEY no está definido en las variables de entorno');
    }

    this.novu = new Novu(apiKey);
  }

  async sendWelcomeNotification(subscriberId: string) {
    await this.novu.trigger('onboarding-demo-workflow', {
      to: {
        subscriberId
      },
      payload: {},
    });
  }
}
