import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment, PaymentDocument } from './schemas/payment.schema';

@Injectable()
export class PaymentsService {
  constructor(@InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>) {}

  async create(data: Partial<Payment>): Promise<Payment> {
    const payment = new this.paymentModel(data);
    return payment.save();
  }

  async findAll(): Promise<Payment[]> {
    return this.paymentModel.find().exec();
  }
}
