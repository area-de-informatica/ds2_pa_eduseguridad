import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Usuario extends Document{
    @Prop()
    first_name: string;

    @Prop()
    middle_name: string;

    @Prop()
    last_name: string;

    @Prop()
    second_last_name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    PwdLastSet: Date;

    @Prop()
    estatus: string;

    @Prop()
    lastLogin: Date;

    @Prop()
    signup_date: Date;
    
    @Prop()
    role: string;    
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);