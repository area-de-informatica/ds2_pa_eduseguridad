import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Modulo extends Document{
    @Prop()
    moduleName: string;

    @Prop()
    status: string;

    @Prop()
    description: string;

    @Prop()
    creationDate: Date;    
}

export const ModuloSchema = SchemaFactory.createForClass(Modulo);