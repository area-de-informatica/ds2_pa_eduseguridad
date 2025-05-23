import { Module } from '@nestjs/common';
import { QuicesService } from './quices.service';
import { QuicesController } from './quices.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuiceSchema } from './schemas/quices.schema';

@Module({
  imports :[
    MongooseModule.forFeature([{ name: 'User', schema: QuiceSchema }])
  ],
  controllers: [QuicesController],
  providers: [QuicesService],
})
export class QuicesModule {}
