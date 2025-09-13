import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserDocument } from '../users/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // Signup / Register user
  async signup(name: string, email: string, password: string, role: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersService.create(
      name,
      email,
      role,
      hashedPassword,
    );

    const payload = { sub: (user as UserDocument)._id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Login user
  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!isPasswordMatching) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: (user as UserDocument)._id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
