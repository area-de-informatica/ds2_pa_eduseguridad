import { Module } from '@nestjs/common';
import { ModulosService } from './modulos.service';
import { ModulosController } from './modulos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuloSchema } from './schemas/modulo.schema';

@Module({
  imports :[
    MongooseModule.forFeature([{ name: 'Modulo', schema: ModuloSchema }])
  ],
  controllers: [ModulosController],
  providers: [ModulosService],
})
export class ModulosModule {}
