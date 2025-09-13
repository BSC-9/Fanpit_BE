import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReservationsService } from './reservations.service';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get()
  async findAll() {
    return this.reservationsService.findAll();
  }

  @Post()
  async create(@Body() body: any) {
    return this.reservationsService.create(body);
  }
}
