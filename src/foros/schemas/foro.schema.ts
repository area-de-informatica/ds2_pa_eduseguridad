import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Foro extends Document{
    @Prop()
    foroName: string;

    @Prop()
    description: string;

    @Prop()
    responseDate: Date;

    @Prop()
    responseTime: Date;
    
    @Prop()
    startDate: Date;

    @Prop()
    endDate: Date;    
}

export const ForoSchema = SchemaFactory.createForClass(Foro);