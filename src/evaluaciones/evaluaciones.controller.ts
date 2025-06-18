import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvaluacionesService } from './evaluaciones.service';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';

@Controller('evaluaciones')
export class EvaluacionesController {
  constructor(private readonly evaluacionesService: EvaluacionesService) {}

  @Post()
  create(@Body() createEvaluacionDto: CreateEvaluacionDto) {
    return this.evaluacionesService.create(createEvaluacionDto);
  }

  @Get()
  findAll() {
    return this.evaluacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluacionesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvaluacionDto: UpdateEvaluacionDto) {
    return this.evaluacionesService.update(id, updateEvaluacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evaluacionesService.remove(id);
  }
}
