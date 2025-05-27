import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Quice extends Document{
    @Prop()
    quicename: string;

    @Prop()
    description: string;

    @Prop()
    attemptDate: string;

    @Prop()
    attemptTime: string;

    @Prop()
    retryCount: number;

    @Prop()
    sequence: string;

    @Prop()
    startDate: Date;

    @Prop()
    startTime: Date;
    
    @Prop()
    endDate: Date;

    @Prop()
    endTime: Date;
}

export const QuiceSchema = SchemaFactory.createForClass(Quice);