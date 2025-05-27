import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Tarea extends Document{
    @Prop()
    taskName: string;

    @Prop()
    description: string;

    @Prop()
    status: string;
    
    @Prop()
    attachment: string;

    @Prop()
    creationDate: Date;

    @Prop()
    creationTime: Date;
}

export const TareaSchema = SchemaFactory.createForClass(Tarea);