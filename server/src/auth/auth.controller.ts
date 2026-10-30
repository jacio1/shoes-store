import { Body, ConflictException, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { User } from '../generated/prisma/client.js';
import { UserService } from '../user/user.service.js';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly UserService: UserService,
  ) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    const existingUserByUsername = this.UserService.findByUsername(
      registerDto.username,
    );

    if (existingUserByUsername) {
      throw new ConflictException('User with this username already registred');
    }

    if (existingUserByEmail) {
      throw new ConflictException('User with this username already registred');
    }

    const existingUserByEmail = this.UserService.findByEmail(registerDto.email);

    const existingUserByPhone = this.UserService.findByPhone(registerDto.phone);

    if (existingUserByPhone) {
      throw new ConflictException('User with this username already registred');
    }
    
    return this.authService.register(registerDto);
  }

  @Post('login')
  login() {
    return 'login';
  }
}
