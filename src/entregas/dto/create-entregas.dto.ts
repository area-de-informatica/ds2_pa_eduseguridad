import { IsString, IsNumber, IsDate, IsOptional } from 'class-validator';

export class CreateEntregasDto {
    @IsString()
    @IsOptional()
    comment: string;

    @IsNumber()
    @IsOptional()
    score: number;

    @IsString()
    @IsOptional()
    attachment: string;

    @IsDate()
    @IsOptional()
    sendTime: Date;

    @IsDate()
    @IsOptional()
    sendDate: Date;    
}