import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment {
  @Prop({ type: Types.ObjectId, ref: 'Reservation', required: true })
  reservationId: string;

  @Prop({ required: true, unique: true })
  razorpayPaymentId: string;

  @Prop()
  razorpayOrderId: string;

  @Prop()
  amount: number;

  @Prop()
  currency: string;

  @Prop({ default: 'created' })
  status: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
