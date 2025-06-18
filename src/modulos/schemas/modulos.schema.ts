import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Usuario } from '../../usuarios/schemas/usuarios.schema'

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
    creationDate: string;   
    
    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }])
    usuarios: Usuario[]
}

export const ModuloSchema = SchemaFactory.createForClass(Modulo);