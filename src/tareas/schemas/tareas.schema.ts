import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Archivo } from '../../archivos/schemas/archivos.schema'

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

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Archivo' }])
    archivos: Archivo[]
}

export const TareaSchema = SchemaFactory.createForClass(Tarea);