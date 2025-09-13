import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SpaceDocument = Space & Document;

@Schema()
export class Space {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  // GeoJSON location for MongoDB
  @Prop({
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true },
  })
  location: {
    type: 'Point';
    coordinates: number[];
  };

  @Prop()
  capacity?: number;

  @Prop()
  amenities?: string[];
}

export const SpaceSchema = SchemaFactory.createForClass(Space);
SpaceSchema.index({ location: '2dsphere' }); // Index for geospatial queries
