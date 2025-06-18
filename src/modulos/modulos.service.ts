import { Injectable } from '@nestjs/common';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';
import { Modulo } from './schemas/modulos.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ModuloSchema } from './schemas/modulos.schema';
//import { createUnzip } from 'zlib';

@Injectable()
export class ModulosService {
  constructor(@InjectModel(Modulo.name) private moduloModel: Model<Modulo>) {}

  async create(createModuloDto: CreateModuloDto): Promise<Modulo> {
    const createdModulo = new this.moduloModel(createModuloDto);
    return createdModulo.save();
  }

  async findAll(): Promise<Modulo[]> {
    return this.moduloModel.find().exec();
  }

  async findOne(id: string): Promise<Modulo | null> {
    return this.moduloModel.findById(id).exec();
  }

  async findUserUsuarios(userId: string): Promise<Modulo | null> {
    return this.moduloModel.findById(userId).populate('usuarios').exec();
  }

  async update(id: string, updateModuloDto: UpdateModuloDto): Promise<Modulo | null> {
    return this.moduloModel.findByIdAndUpdate(id, updateModuloDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Modulo | null> {
    return this.moduloModel.findByIdAndDelete(id).exec();
  }
}
