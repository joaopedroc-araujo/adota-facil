import { User } from 'generated/prisma';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  createUser(user: CreateUserDto): Promise<User>;
  updateUser(user: UpdateUserDto): Promise<User>;
  deleteUser(id: string): Promise<void>;
}
