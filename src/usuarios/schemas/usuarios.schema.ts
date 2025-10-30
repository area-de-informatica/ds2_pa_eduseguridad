import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Modulo } from '../../modulos/schemas/modulos.schema';

@Schema({
    timestamps: true
})
export class Usuario extends Document {
    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true, unique: true })
    uid: string; // Firebase User ID

    @Prop()
    estatus: string;

    @Prop()
    lastLogin: Date;

    @Prop({ default: Date.now })
    signup_date: Date;
    
    @Prop({ required: true })
    rol: string;
    
    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Modulo' }])
    modulos: Modulo[];
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
