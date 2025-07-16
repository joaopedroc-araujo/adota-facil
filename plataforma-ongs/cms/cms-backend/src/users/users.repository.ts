import { Injectable } from '@nestjs/common';
import { User } from 'generated/prisma';
import { IUserRepository } from 'src/interface/IUserRepository.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async createUser(user: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({
      data: user,
    });
  }

  async updateUser(user: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({
      where: { id: user.id },
      data: user,
    });
  }

  async deleteUser(id: string): Promise<void> {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
