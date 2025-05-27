import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Entrega } from "src/entregas/schemas/entregas.schema";

@Schema({
    timestamps: true
})

export class Archivo extends Document{
    @Prop()
    fileName: string;

    @Prop()
    fileExtension: string;
    
    @Prop()
    widthPx: number;
    
    @Prop()
    heightPx: number;
    
    @Prop()
    description: string;
    
    @Prop()
    filePath: string;
    
    @Prop()
    size: number;
    
    @Prop()
    fileType: string;
    
    @Prop()
    creationDate: Date;   
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Entrega'})
    entregas_id: Entrega;
}

export const ArchivoSchema = SchemaFactory.createForClass(Archivo);