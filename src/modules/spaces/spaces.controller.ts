import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { CreateSpaceDto } from './dto/create-space.dto';
import { ValidationPipe } from '../../common/pipes/validation.pipe';

@Controller('spaces')
export class SpacesController {
  constructor(private readonly spacesService: SpacesService) {}

  @Get()
  async findAll() {
    return this.spacesService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createSpaceDto: CreateSpaceDto) {
    return this.spacesService.create(createSpaceDto);
  }
}
