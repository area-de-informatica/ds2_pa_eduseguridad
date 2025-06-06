import { Injectable } from '@nestjs/common';
import { CreateEntregasDto } from './dto/create-entregas.dto';
import { UpdateEntregasDto } from './dto/update-entregas.dto';
import { Entrega } from './schemas/entregas.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EntregasService {
  constructor(@InjectModel(Entrega.name) private entregaModel: Model<Entrega>) {}

  async create(createEntregasDto: CreateEntregasDto): Promise<Entrega> {
    const createdEntrega = new this.entregaModel(createEntregasDto);
    return createdEntrega.save();
  }

  async findAll(): Promise<Entrega[]> {
    return this.entregaModel.find().exec();
  }

  async findOne(id: string): Promise<Entrega | null> {
    return this.entregaModel.findById(id).exec();
  }

  async update(id: string, updateEntregasDto: UpdateEntregasDto): Promise<Entrega | null> {
    return this.entregaModel.findByIdAndUpdate(id, updateEntregasDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Entrega | null> {
    return this.entregaModel.findByIdAndDelete(id).exec();
  }
}
