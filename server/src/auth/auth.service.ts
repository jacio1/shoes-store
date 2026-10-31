import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto.js';
import { UserService } from '../user/user.service.js';
import { LoginDto } from './dto/login.dto.js';
import { compare, compareSync } from 'bcrypt';
import { User } from '../generated/prisma/client.js';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly userService: UserService) {}

  register(registerDto: RegisterDto) {
    const createUserDto = registerDto;
    const createdUser = this.userService.create(createUserDto);

    return createdUser;
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.userService.findByEmailWithPassword(email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const isPasswordMatch = await compare(password, user?.password);

    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
