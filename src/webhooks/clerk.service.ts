// src/webhooks/clerk.service.ts
import { Injectable } from '@nestjs/common';
import { NovuService } from '../novu/novu.service';

@Injectable()
export class ClerkService {
  constructor(private readonly novuService: NovuService) {}

  async handleSessionCreatedWebhook(data: any) {
    const userId = data.user_id;

    if (!userId) {
      console.warn('Webhook de sesión sin user_id');
      return;
    }

    // Solo mandamos la notificación con el ID como subscriberId
    await this.novuService.sendWelcomeNotification(userId);
  }
}
