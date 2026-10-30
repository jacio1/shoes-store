import {
  IsEmail,
  IsString,
  IsStrongPassword,
  Length,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'Enter the correctly email' })
  email: string;

  @IsString({ message: 'Phone must be a string' })
  @Length(11, 11, { message: 'Enter the phone number correctly' })
  phone: string;

  @IsString({ message: 'Username must be a string' })
  @Length(2, 20, {
    message: 'The username must be between 2 and 20 characters long.',
  })
  username: string;

  @IsString({ message: 'First name must be a string' })
  @Length(2, 20, {
    message: 'The first name must be between 2 and 20 characters long.',
  })
  firstName: string;

  @IsString({ message: 'last name must be a string' })
  @Length(2, 20, {
    message: 'The last name must be between 2 and 20 characters long.',
  })
  lastName: string;

  @IsStrongPassword(
    {},
    {
      message:
        'The password must contain numbers, uppercase and lowercase letters, and special characters.',
    },
  )
  @MinLength(8, { message: 'The password must contain minimum 8 letters' })
  password: string;
}
