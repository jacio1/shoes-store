import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const createdUser = this.authService.register(registerDto);
    return createdUser;
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    console.log('loginDto', loginDto)
    return loginDto
  }
}
