import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { RegisterDto } from './dto/register.dto.js';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  register(registerDto: RegisterDto) {
    const { username, password, email, phone, firstName, lastName } =
      registerDto;
    return this.prismaService.user.create({
      data: {
        username,
        password, // ВАЖНО: хешируйте пароль (bcrypt/argon2), не храните в открытом виде!
        email: email ?? null,
        phone: phone ?? null,
        firstName: firstName ?? null,
        lastName: lastName ?? null,
      },
    });
  }
}
