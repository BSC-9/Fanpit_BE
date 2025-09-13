import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Space, SpaceDocument } from './space.schema';

@Injectable()
export class SpacesService {
  constructor(@InjectModel(Space.name) private spaceModel: Model<SpaceDocument>) {}

  async create(data: { name: string; location: { type: string; coordinates: number[] } }) {
    const space = new this.spaceModel(data);
    return space.save();
  }

  async findAll() {
    return this.spaceModel.find().exec();
  }
}
