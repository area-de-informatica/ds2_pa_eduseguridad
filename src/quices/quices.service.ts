import { Injectable } from '@nestjs/common';
import { CreateQuiceDto } from './dto/create-quice.dto';
import { UpdateQuiceDto } from './dto/update-quice.dto';
import { Quice } from './schemas/quices.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuicesService {
  constructor(@InjectModel(Quice.name) private quiceModel: Model<Quice>) {}

  async create(createQuiceDto: CreateQuiceDto): Promise<Quice> {
    const createdQuice = new this.quiceModel(createQuiceDto);
    return createdQuice.save();
  }

  async findAll(): Promise<Quice[]> {
    return this.quiceModel.find().exec();
  }

  async findOne(id: string): Promise<Quice | null> {
    return this.quiceModel.findById(id).exec();
  }

  async update(id: string, updateQuiceDto: UpdateQuiceDto): Promise<Quice | null> {
    return this.quiceModel.findByIdAndUpdate(id, updateQuiceDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Quice | null> {
    return this.quiceModel.findByIdAndDelete(id).exec();
  }
}
