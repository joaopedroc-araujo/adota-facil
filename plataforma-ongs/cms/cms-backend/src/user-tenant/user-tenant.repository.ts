import { Injectable } from '@nestjs/common';
import { UserTenant } from 'generated/prisma';
import { IUserTenantRepository } from 'src/interface/IUserTenantRepository.interface';
import { CreateUserTenantDto } from './dto/create-user-tenant.dto';
import { UpdateUserTenantDto } from './dto/update-user-tenant.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserTenantRepository implements IUserTenantRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: CreateUserTenantDto,
    tenantId: string,
  ): Promise<UserTenant> {
    return await this.prisma.userTenant.create({
      data: {
        userId: data.userId,
        role: data.role,
        tenantId: tenantId,
      },
    });
  }

  async findByUserAndTenant(
    userId: string,
    tenantId: string,
  ): Promise<UserTenant | null> {
    return await this.prisma.userTenant.findFirst({
      where: {
        userId: userId,
        tenantId: tenantId,
      },
    });
  }

  async updateRole(
    userTenantId: string,
    data: UpdateUserTenantDto,
  ): Promise<UserTenant> {
    return await this.prisma.userTenant.update({
      where: {
        id: userTenantId,
      },
      data: {
        role: data.role,
      },
    });
  }

  async delete(userTenantId: string): Promise<void> {
    return await this.prisma.userTenant.delete({
      where: {
        id: userTenantId,
      },
    });
  }
}
