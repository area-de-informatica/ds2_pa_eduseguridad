import { Module } from '@nestjs/common';
import { EvaluacionesService } from './evaluaciones.service';
import { EvaluacionesController } from './evaluaciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EvaluacionSchema } from './schemas/evaluaciones.schema';

@Module({
  imports :[
    MongooseModule.forFeature([{ name: 'User', schema: EvaluacionSchema }])
  ],
  controllers: [EvaluacionesController],
  providers: [EvaluacionesService],
})
export class EvaluacionesModule {}
