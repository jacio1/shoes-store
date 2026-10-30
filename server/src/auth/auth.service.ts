import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { genSaltSync, hashSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async register(registerDto: RegisterDto) {
    const hashedPassword = this.hashPassword(registerDto.password);

    const userData = { ...registerDto, password: hashedPassword };

    const newUser = await this.prismaService.user
      .create({
        data: userData,
      })
      .catch((err) => {
        throw new BadRequestException('Error during registration a new user');
      });

    const { password, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }

  private hashPassword(password: string) {
    return hashSync(password, genSaltSync(10));
  }
}
