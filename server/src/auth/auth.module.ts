import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { UserService } from '../user/user.service.js';
import { JwtModule } from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport'
@Module({
  controllers: [AuthController],
  providers: [AuthService,UserService],
  imports: [JwtModule.registerAsync(), PassportModule],
})
export class AuthModule {}
