import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() body: { name: string; email: string; role: string; passwordHash: string }) {
    return this.usersService.create(body.name, body.email, body.role, body.passwordHash);
  }
}
