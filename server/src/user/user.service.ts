import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
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
        where: {username},
      })
      .then((foundedUser) => {
        if(!foundedUser){
          return null
        }

        const {password, ...userWithoutPassword} = foundedUser
        return userWithoutPassword
      })
      .catch((error) => {
        throw new NotFoundException
      })
  }

  async findByEmail(email: string) {
    try {
      const foundedUser = await this.prismaService.user.findUnique({
        where: { email },
      });

      if (!foundedUser) {
        return null;
      }

      const { password, ...userWithoutPassword } = foundedUser;
      return userWithoutPassword;
    } catch (error) {
      throw new NotFoundException('Email not founded');
    }
  }

  async findByPhone(phone: string) {
    try {
      const foundedUser = await this.prismaService.user.findUnique({
        where: { phone },
      });

      if (!foundedUser) {
        return null;
      }

      const { password, ...userWithoutPassword } = foundedUser;
      return userWithoutPassword;
    } catch (error) {
      throw new NotFoundException('Phone not founded');
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
