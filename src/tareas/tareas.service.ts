import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { Tarea } from './schemas/tareas.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TareasService {
  constructor(@InjectModel(Tarea.name) private tareaModel: Model<Tarea>) {}

  async create(createTareaDto: CreateTareaDto): Promise<Tarea> {
    const createdTarea = new this.tareaModel(createTareaDto);
    return createdTarea.save();
  }

  async findAll(): Promise<Tarea[]> {
    return this.tareaModel.find().exec();
  }

  async findOne(id: string): Promise<Tarea | null > {
    return this.tareaModel.findById(id).exec();
  }

  async update(id: string, updateTareaDto: UpdateTareaDto): Promise<Tarea | null> {
    return this.tareaModel.findByIdAndUpdate(id, updateTareaDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Tarea | null> {
    return this.tareaModel.findByIdAndDelete(id).exec()
  }
}
