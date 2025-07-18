import { Injectable } from '@nestjs/common';

import { IUserRepository } from 'src/interface/IUserRepository.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: IUserRepository) {}

  async findById(id: string) {
    return this.userRepository.findById(id);
  }

  async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  async createUser(createUserDto: CreateUserDto) {
    return this.userRepository.createUser(createUserDto);
  }

  async updateUser(updateUserDto: UpdateUserDto) {
    return this.userRepository.updateUser(updateUserDto);
  }

  async deleteUser(id: string) {
    return this.userRepository.deleteUser(id);
  }
}
