import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/users/users.module';
import { SpacesModule } from './modules/spaces/spaces.module';
import { ReservationsModule } from './modules/reservations/reservations.module';
import { PaymentsModule } from './modules/payments/payments.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    SpacesModule,
    ReservationsModule,
    PaymentsModule,
  ],
})
export class AppModule {}
