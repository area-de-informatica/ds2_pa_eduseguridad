import { PartialType } from '@nestjs/mapped-types';
import { CreateQuiceDto } from './create-quice.dto';

export class UpdateQuiceDto extends PartialType(CreateQuiceDto) {}
