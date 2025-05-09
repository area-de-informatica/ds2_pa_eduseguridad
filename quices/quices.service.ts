import { Injectable } from '@nestjs/common';
import { CreateQuiceDto } from './dto/create-quice.dto';
import { UpdateQuiceDto } from './dto/update-quice.dto';

@Injectable()
export class QuicesService {
  create(createQuiceDto: CreateQuiceDto) {
    return 'This action adds a new quice';
  }

  findAll() {
    return `This action returns all quices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quice`;
  }

  update(id: number, updateQuiceDto: UpdateQuiceDto) {
    return `This action updates a #${id} quice`;
  }

  remove(id: number) {
    return `This action removes a #${id} quice`;
  }
}
