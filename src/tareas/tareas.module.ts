import { Module } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { TareasController } from './tareas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TareaSchema } from './schemas/tareas.schema';

@Module({
  imports :[
    MongooseModule.forFeature([{ name: 'Tarea', schema: TareaSchema }])
  ],
  controllers: [TareasController],
  providers: [TareasService],
})
export class TareasModule {}
