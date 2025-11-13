import { IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateEvaluacionDto {
    @IsDate()
    @IsOptional()
    beginDate: Date;

    @IsDate()
    @IsOptional()
    beginTime: Date;
    
    @IsNumber()
    @IsOptional()
    totalAttempts: number;

    @IsNumber()
    @IsOptional()
    score: number;

    @IsDate()
    @IsOptional()
    finishDate: Date;

    @IsDate()
    @IsOptional()
    finishTime: Date;    
}