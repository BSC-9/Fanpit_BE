import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { ValidationPipe } from '../../common/pipes/validation.pipe';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get()
  async findAll() {
    return this.reservationsService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.create(createReservationDto);
  }
}
