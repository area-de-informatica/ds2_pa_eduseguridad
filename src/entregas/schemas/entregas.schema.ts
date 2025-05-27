import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Archivo } from "src/archivos/schemas/archivos.schema";

@Schema({
    timestamps: true
})

export class Entrega extends Document{
    @Prop()
    comment: string;

    @Prop()
    score: number;

    @Prop()
    attachment: string;

    @Prop()
    sendTime: Date;

    @Prop()
    sendDate: Date;    

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Archivo' })
    archivos_id: Archivo;
}

export const EntregaSchema = SchemaFactory.createForClass(Entrega);