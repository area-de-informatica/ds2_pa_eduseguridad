import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateArchivoDto {
  @IsString()
  @IsNotEmpty()
  readonly fileName: string;

  @IsString()
  @IsNotEmpty()
  readonly fileExtension: string;

  @IsNumber()
  @IsOptional()
  readonly widthPx: number;

  @IsNumber()
  @IsOptional()
  readonly heightPx: number;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly filePath: string;

  @IsNumber()
  @IsNotEmpty()
  readonly size: number;

  @IsString()
  @IsNotEmpty()
  readonly fileType: string;
}
