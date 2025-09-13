import { Controller, Post, Get, Body } from '@nestjs/common';
import { ReservationsService } from './reservations.service';

@Controller('reservations')
export class ReservationsController {
  constructor(private reservationsService: ReservationsService) {}

  @Post()
  create(
    @Body()
    body: { userId: string; spaceId: string; startAt: string; endAt: string },
  ) {
    return this.reservationsService.create({
      ...body,
      startAt: new Date(body.startAt),
      endAt: new Date(body.endAt),
    });
  }

  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }
}
