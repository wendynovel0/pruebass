// src/webhooks/clerk.controller.ts
import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ClerkService } from './clerk.service';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';

@ApiTags('Clerk Webhooks')
@Controller('webhooks/clerk')
export class ClerkController {
  constructor(private readonly clerkService: ClerkService) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Webhook de Clerk: session.created' })
  @ApiBody({ schema: { example: {
    type: 'session.created',
    data: {
      id: 'sess_12345',
      user_id: 'user_abc123',
      created_at: 1654012591835,
      last_active_at: 1654012591835
    }
  }}})
  async handleWebhook(@Body() body: any) {
    console.log('📦 Webhook recibido de Clerk:', JSON.stringify(body, null, 2));

    if (body.type === 'session.created') {
      await this.clerkService.handleSessionCreatedWebhook(body.data);
    }

    return { received: true };
  }
}
