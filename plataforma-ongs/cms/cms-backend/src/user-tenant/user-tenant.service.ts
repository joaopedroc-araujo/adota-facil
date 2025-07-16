import { Inject, Injectable } from '@nestjs/common';
import { CreateUserTenantDto } from './dto/create-user-tenant.dto';
import { UpdateUserTenantDto } from './dto/update-user-tenant.dto';
import { IUserTenantRepository } from 'src/interface/IUserTenantRepository.interface';

@Injectable()
export class UserTenantService {
  constructor(
    @Inject('IUserTenantRepository')
    private readonly userTenantRepository: IUserTenantRepository,
  ) {}

  async create(createUserTenantDto: CreateUserTenantDto, tenantId: string) {
    const createdUserTenant = await this.userTenantRepository.create(
      createUserTenantDto,
      tenantId,
    );

    if (!createdUserTenant) throw new Error('Failed to create user tenant');

    return createdUserTenant;
  }

  async findByUserAndTenant(userId: string, tenantId: string) {
    const userTenant = await this.userTenantRepository.findByUserAndTenant(
      userId,
      tenantId,
    );

    if (!userTenant) throw new Error('User tenant not found');

    return userTenant;
  }

  async update(id: string, updateUserTenantDto: UpdateUserTenantDto) {
    const updatedUserTenant = await this.userTenantRepository.updateRole(
      id,
      updateUserTenantDto,
    );

    if (!updatedUserTenant) throw new Error('Failed to update user tenant');

    return updatedUserTenant;
  }

  async delete(id: string) {
    const deletedUserTenant = await this.userTenantRepository.delete(id);

    if (deletedUserTenant === null)
      throw new Error('Failed to delete user tenant');

    return deletedUserTenant;
  }
}
