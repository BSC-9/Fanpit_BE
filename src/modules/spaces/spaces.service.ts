import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Space, SpaceDocument } from './schemas/space.schema';

@Injectable()
export class SpacesService {
  constructor(@InjectModel(Space.name) private spaceModel: Model<SpaceDocument>) {}

  async create(data: Partial<Space>): Promise<Space> {
    const space = new this.spaceModel(data);
    return space.save();
  }

  async findAll(): Promise<Space[]> {
    return this.spaceModel.find().exec();
  }
}
