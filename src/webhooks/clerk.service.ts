// src/webhooks/clerk.service.ts
import { Injectable } from '@nestjs/common';
import { NovuService } from '../novu/novu.service';

@Injectable()
export class ClerkService {
  constructor(private readonly novuService: NovuService) {}

  async handleUserCreatedWebhook(data: any) {
    const userId = data.id;
    const emailObj = data.email_addresses?.[0];
    const email = emailObj?.email_address;

    if (!userId || !email) {
      console.warn('Webhook incompleto: falta ID o email');
      return;
    }

    await this.novuService.sendWelcomeNotification(userId, email);
  }
}
