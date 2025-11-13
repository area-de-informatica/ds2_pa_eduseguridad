import { IsDate, IsString, IsOptional } from 'class-validator';

export class CreateForoDto {
    @IsString()
    @IsOptional()
    foroName: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsDate()
    @IsOptional()
    responseDate: Date;

    @IsDate()
    @IsOptional()
    responseTime: Date;
    
    @IsDate()
    @IsOptional()
    startDate: Date;

    @IsDate()
    @IsOptional()
    endDate: Date;    
}