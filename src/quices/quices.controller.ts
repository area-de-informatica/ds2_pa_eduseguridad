import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuicesService } from './quices.service';
import { CreateQuiceDto } from './dto/create-quice.dto';
import { UpdateQuiceDto } from './dto/update-quice.dto';

@Controller('quices')
export class QuicesController {
  constructor(private readonly quicesService: QuicesService) {}

  @Post()
  create(@Body() createQuiceDto: CreateQuiceDto) {
    return this.quicesService.create(createQuiceDto);
  }

  @Get()
  findAll() {
    return this.quicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quicesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuiceDto: UpdateQuiceDto) {
    return this.quicesService.update(id, updateQuiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quicesService.remove(id);
  }
}
