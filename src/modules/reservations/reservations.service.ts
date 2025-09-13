import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation, ReservationDocument } from './reservation.schema';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectModel(Reservation.name) private reservationModel: Model<ReservationDocument>,
  ) {}

  async create(data: Partial<Reservation>) {
    const reservation = new this.reservationModel(data);
    return reservation.save();
  }

  async findAll() {
    return this.reservationModel.find().exec();
  }
}
