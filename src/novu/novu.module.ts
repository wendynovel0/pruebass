// src/novu/novu.module.ts
import { Module } from '@nestjs/common';
import { NovuService } from './novu.service';

@Module({
  providers: [NovuService],
  exports: [NovuService], // Exporta para que pueda usarse en otros módulos
})
export class NovuModule {}
