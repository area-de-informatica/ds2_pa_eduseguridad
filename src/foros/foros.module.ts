import { Module } from '@nestjs/common';
import { ForosService } from './foros.service';
import { ForosController } from './foros.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ForoSchema } from './schemas/foros.schema';

@Module({
  imports :[
    MongooseModule.forFeature([{ name: 'Foro', schema: ForoSchema }])
  ],
  controllers: [ForosController],
  providers: [ForosService],
})
export class ForosModule {}
