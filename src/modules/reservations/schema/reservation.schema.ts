import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ReservationDocument = Reservation & Document;

@Schema()
export class Reservation {
  @Prop({ type: Types.ObjectId, ref: 'Space', required: true })
  spaceId: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: string;

  @Prop({ required: true })
  startAt: Date;

  @Prop({ required: true })
  endAt: Date;

  @Prop({ default: 'pending' })
  status: string;

  @Prop({ type: Object })
  pricingSnapshot: Record<string, any>;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
ReservationSchema.index({ spaceId: 1, startAt: 1, endAt: 1 });
