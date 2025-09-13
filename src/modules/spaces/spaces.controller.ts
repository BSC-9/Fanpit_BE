import { Controller, Post, Get, Body } from '@nestjs/common';
import { SpacesService } from './spaces.service';

@Controller('spaces')
export class SpacesController {
  constructor(private readonly spacesService: SpacesService) {}

  @Get()
  findAll() {
    return this.spacesService.findAll();
  }

  @Post()
  create(@Body() body: { name: string; location: { type: string; coordinates: number[] } }) {
    return this.spacesService.create(body);
  }
}
