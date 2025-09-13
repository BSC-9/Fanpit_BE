// src/modules/spaces/space.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SpaceDocument = Space & Document;

@Schema()
export class Space {
  @Prop({ required: true })
  name: string;

  // GeoJSON point
  @Prop({ type: String, enum: ['Point'], default: 'Point', required: true })
  type: string;

  @Prop({ type: [Number], required: true })
  coordinates: number[];

  @Prop()
  description?: string;

  @Prop()
  price?: number;
}

export const SpaceSchema = SchemaFactory.createForClass(Space);

// Add 2dsphere index for geospatial queries
SpaceSchema.index({ coordinates: '2dsphere' });
