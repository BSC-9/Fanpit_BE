import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReservationDocument = Reservation & Document;

@Schema()
export class Reservation {
  @Prop({ required: true })
  startAt: Date;

  @Prop({ required: true })
  endAt: Date;

  @Prop({ required: true })
  spaceId: string;

  @Prop({ required: true })
  userId: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
