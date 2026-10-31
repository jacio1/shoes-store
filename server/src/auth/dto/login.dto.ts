import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Enter the correctly email' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  @MinLength(1, { message: 'Password is required' })
  password: string;
}