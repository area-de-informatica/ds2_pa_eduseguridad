import { Module } from '@nestjs/common';
import { QuicesService } from './quices.service';
import { QuicesController } from './quices.controller';

@Module({
  controllers: [QuicesController],
  providers: [QuicesService],
})
export class QuicesModule {}
