import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ReservationsModule } from './modules/reservations/reservations.module';
import { SpacesModule } from './modules/spaces/spaces.module';
import { PaymentsModule } from './modules/payments/payments.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI!), // use ! to assert non-null
    UsersModule,
    AuthModule,
    ReservationsModule,
    SpacesModule,
    PaymentsModule,
  ],
})
export class AppModule {}
