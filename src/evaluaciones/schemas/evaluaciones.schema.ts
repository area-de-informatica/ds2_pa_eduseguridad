import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Evaluacion extends Document{
    @Prop()
    beginDate: Date;

    @Prop()
    beginTime: Date;
    
    @Prop()
    totalAttempts: number;

    @Prop()
    score: number;

    @Prop()
    finishDate: Date;

    @Prop()
    finishTime: Date;    
}

export const EvaluacionSchema = SchemaFactory.createForClass(Evaluacion);