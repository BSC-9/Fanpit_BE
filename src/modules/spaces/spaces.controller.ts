import { Controller, Get, Post, Body } from '@nestjs/common';
import { SpacesService } from './spaces.service';

@Controller('spaces')
export class SpacesController {
  constructor(private readonly spacesService: SpacesService) {}

  @Get()
  async findAll() {
    return this.spacesService.findAll();
  }

  @Post()
  async create(@Body() body: any) {
    return this.spacesService.create(body);
  }
}
