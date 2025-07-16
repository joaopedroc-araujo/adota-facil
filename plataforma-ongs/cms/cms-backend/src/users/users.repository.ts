import { Injectable } from '@nestjs/common';
import { User } from 'generated/prisma';
import { IUserRepository } from 'src/interface/IUserRepository.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserRepository implements IUserRepository {
  findById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  createUser(user: CreateUserDto): Promise<User> {
    throw new Error('Method not implemented.');
  }
  updateUser(user: UpdateUserDto): Promise<User> {
    throw new Error('Method not implemented.');
  }
  deleteUser(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
