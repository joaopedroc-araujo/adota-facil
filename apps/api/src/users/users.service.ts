import { ConflictException, Injectable } from '@nestjs/common';

import { IUserRepository } from 'src/interface/IUserRepository.interface';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
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
    const existingUser = await this.userRepository.findByEmail(
      createUserDto.email,
    );
    if (existingUser) {
      throw new ConflictException(
        `O email "${createUserDto.email}" já está cadastrado.`,
      );
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      saltRounds,
    );

    return this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
  }

  async updateUser(id: string, user: UpdateUserDto) {
    return this.userRepository.update(id, user);
  }

  async deleteUser(id: string) {
    return this.userRepository.delete(id);
  }
}
