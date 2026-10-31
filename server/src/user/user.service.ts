import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { genSaltSync, hashSync } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const hashedPassword = this.hashPassword(createUserDto.password);

    const userData = { ...createUserDto, password: hashedPassword };

        const existingUserByUsername = await this.findByUsername(
          createUserDto.username,
        );
    
        if (existingUserByUsername) {
          throw new ConflictException('User with this username already registred');
        }
    
        const existingUserByEmail = await this.findByEmail(
          createUserDto.email,
        );
    
        if (existingUserByEmail) {
          throw new ConflictException('User with this username already registred');
        }
        const existingUserByPhone = await this.findByPhone(
          createUserDto.phone,
        );
    
        if (existingUserByPhone) {
          throw new ConflictException('User with this username already registred');
        }

    const newUser = await this.prismaService.user
      .create({
        data: userData,
      })
      .catch((err) => {
        throw new BadRequestException('Error during create a new user');
      });

    const { password, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByUsername(username: string) {
    return this.prismaService.user
      .findUnique({
        where: { username },
      })
      .then((foundedUser) => {
        if (!foundedUser) {
          return null;
        }

        const { password, ...userWithoutPassword } = foundedUser;
        return userWithoutPassword;
      })
      .catch((error) => {
        throw new NotFoundException('Username not found');
      });
  }

  async findByEmail(email: string) {
    return this.prismaService.user
      .findUnique({
        where: { email },
      })
      .then((foundedUser) => {
        if (!foundedUser) {
          return null;
        }

        const { password, ...userWithoutPassword } = foundedUser;
        return userWithoutPassword;
      })
      .catch((error) => {
        throw new NotFoundException('Email not found');
      });
  }

  async findByPhone(phone: string) {
    return this.prismaService.user
      .findUnique({
        where: { phone },
      })
      .then((foundedUser) => {
        if (!foundedUser) {
          return null;
        }

        const { password, ...userWithoutPassword } = foundedUser;
        return userWithoutPassword;
      })
      .catch((error) => {
        throw new NotFoundException('Phone not found');
      });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private hashPassword(password: string) {
    return hashSync(password, genSaltSync(10));
  }
}
