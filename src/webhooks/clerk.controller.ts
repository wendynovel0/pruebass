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
  @ApiOperation({ summary: 'Webhook de Clerk para nuevos usuarios' })
  @ApiBody({ schema: { example: {
    type: 'user.created',
    data: {
      id: 'user_29w83sxmDNGwOuEthce5gg56FcC',
      email_addresses: [
        {
          email_address: 'example@example.org'
        }
      ]
    }
  }}})
  async handleWebhook(@Body() body: any) {
    if (body.type === 'user.created') {
      await this.clerkService.handleUserCreatedWebhook(body.data);
    }

    return { received: true };
  }
}
