import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation, ReservationDocument } from './schemas/reservation.schema';

@Injectable()
export class ReservationsService {
  constructor(@InjectModel(Reservation.name) private reservationModel: Model<ReservationDocument>) {}

  async create(data: Partial<Reservation>): Promise<Reservation> {
    // Check for overlap
    const overlap = await this.reservationModel.findOne({
      spaceId: data.spaceId,
      status: { $in: ['pending', 'confirmed'] },
      startAt: { $lt: data.endAt },
      endAt: { $gt: data.startAt },
    });
    if (overlap) throw new Error('Time slot already booked');

    const reservation = new this.reservationModel(data);
    return reservation.save();
  }

  async findAll(): Promise<Reservation[]> {
    return this.reservationModel.find().exec();
  }
}
