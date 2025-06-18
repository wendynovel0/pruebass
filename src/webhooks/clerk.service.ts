// src/webhooks/clerk.service.ts
import { Injectable } from '@nestjs/common';
import { NovuService } from '../novu/novu.service';

@Injectable()
export class ClerkService {
  constructor(private readonly novuService: NovuService) {}

  async handleUserCreatedWebhook(data: any) {
    const userId = data.id;
    const email = data.email_addresses?.[0]?.email_address;

    if (!email) return;

    await this.novuService.sendWelcomeNotification(userId, email);
  }
}
