import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type SpaceDocument = Space & Document;

@Schema()
export class Space {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  ownerId: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: { type: String, enum: ['Point'], default: 'Point' } })
  location: { type: string; coordinates: number[] };

  @Prop()
  capacity: number;

  @Prop([String])
  amenities: string[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const SpaceSchema = SchemaFactory.createForClass(Space);
SpaceSchema.index({ location: '2dsphere' });
