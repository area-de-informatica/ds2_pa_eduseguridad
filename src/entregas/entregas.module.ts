import { Module } from '@nestjs/common';
import { EntregasService } from './entregas.service';
import { EntregasController } from './entregas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EntregaSchema } from './schemas/entregas.schema';

@Module({
  imports :[
    MongooseModule.forFeature([{ name: 'User', schema: EntregaSchema }])
  ],
  controllers: [EntregasController],
  providers: [EntregasService],
})
export class EntregasModule {}
