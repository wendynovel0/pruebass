// src/webhooks/dto/clerk-user-created.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class ClerkEmailAddressDto {
  @ApiProperty()
  email_address: string;
}

export class ClerkUserCreatedDto {
  @ApiProperty()
  id: string;

  @ApiProperty({ type: [ClerkEmailAddressDto] })
  email_addresses: ClerkEmailAddressDto[];
}
