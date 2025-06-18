// src/webhooks/webhooks.module.ts
import { Module } from '@nestjs/common';
import { ClerkController } from './clerk.controller';
import { ClerkService } from './clerk.service';
import { NovuModule } from '../novu/novu.module';

@Module({
  imports: [NovuModule],
  controllers: [ClerkController],
  providers: [ClerkService],
})
export class WebhooksModule {}
