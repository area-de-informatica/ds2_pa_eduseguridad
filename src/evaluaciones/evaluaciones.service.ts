import { Injectable } from '@nestjs/common';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
import { Evaluacion } from './schemas/evaluaciones.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EvaluacionesService {
 constructor(@InjectModel(Evaluacion.name) private readonly evaluacionModel: Model<Evaluacion>) {}

  async create(createEvaluacionDto: CreateEvaluacionDto): Promise<Evaluacion> {
    const createdEvaluacion = new this.evaluacionModel(createEvaluacionDto);
    return createdEvaluacion.save();
  }

  async findAll(): Promise<Evaluacion[]> {
    return this.evaluacionModel.find().exec();
  }

  async findOne(id: string): Promise<Evaluacion | null> {
    return this.evaluacionModel.findById(id).exec();
  }

  async update(id: string, updateEvaluacionDto: UpdateEvaluacionDto): Promise<Evaluacion | null> {
    return this.evaluacionModel.findByIdAndUpdate(id, updateEvaluacionDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Evaluacion | null> {
    return this.evaluacionModel.findByIdAndDelete(id).exec();
  }
}
