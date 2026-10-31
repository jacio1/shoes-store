import { IsString } from 'class-validator';

export class LoginDto {
  @IsString({ message: 'password must be string' })
  password: string;

  @IsString({ message: 'username must be string' })
  email: string;
}
