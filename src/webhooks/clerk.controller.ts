// src/webhooks/clerk.controller.ts
import { Controller, Post, Req, HttpCode, Body } from '@nestjs/common';
import { ClerkService } from './clerk.service';
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';
import { ClerkUserCreatedDto } from './dto/clerk-user-created.dto';

@ApiTags('Clerk Webhooks')
@Controller('webhooks/clerk')
export class ClerkController {
  constructor(private readonly clerkService: ClerkService) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Recibe eventos desde Clerk' })
  @ApiBody({ type: ClerkUserCreatedDto })
  async handleWebhook(@Body() event: any) {
    if (event.type === 'user.created') {
      const user = event.data;
      await this.clerkService.handleUserCreatedWebhook(user);
    }

    return { received: true };
  }
}
