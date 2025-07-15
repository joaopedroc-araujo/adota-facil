import { Injectable } from '@nestjs/common';
import { CreateUserTenantDto } from './dto/create-user-tenant.dto';
import { UpdateUserTenantDto } from './dto/update-user-tenant.dto';

@Injectable()
export class UserTenantService {
  create(createUserTenantDto: CreateUserTenantDto) {
    return 'This action adds a new userTenant';
  }

  findAll() {
    return `This action returns all userTenant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userTenant`;
  }

  update(id: number, updateUserTenantDto: UpdateUserTenantDto) {
    return `This action updates a #${id} userTenant`;
  }

  remove(id: number) {
    return `This action removes a #${id} userTenant`;
  }
}
