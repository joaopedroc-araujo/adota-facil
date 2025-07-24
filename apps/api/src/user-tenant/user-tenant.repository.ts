import { Injectable } from '@nestjs/common';
import {
  IUserTenantRepository,
  UserTenantWithUserAndTenant,
} from 'src/interface/IUserTenantRepository.interface';
import { CreateUserTenantDto } from './dto/create-user-tenant.dto';
import { UpdateUserTenantDto } from './dto/update-user-tenant.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserTenantRepository implements IUserTenantRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: CreateUserTenantDto,
    tenantId: string,
  ): Promise<UserTenantWithUserAndTenant> {
    return await this.prisma.withTenant(tenantId).userTenant.create({
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
  ): Promise<UserTenantWithUserAndTenant | null> {
    return await this.prisma.withTenant(tenantId).userTenant.findFirst({
      where: { userId },
    });
  }

  async findByEmailAndTenant(
    email: string,
    tenantId: string,
  ): Promise<UserTenantWithUserAndTenant | null> {
    return await this.prisma.withTenant(tenantId).userTenant.findFirst({
      where: {
        user: { email },
      },
      include: {
        user: true,
      },
    });
  }

  async updateRole(
    userTenantId: string,
    data: UpdateUserTenantDto,
    tenantId: string,
  ): Promise<UserTenantWithUserAndTenant> {
    return await this.prisma.withTenant(tenantId).userTenant.update({
      where: { id: userTenantId },
      data: { role: data.role },
    });
  }

  async delete(userTenantId: string, tenantId: string): Promise<void> {
    return await this.prisma.withTenant(tenantId).userTenant.delete({
      where: { id: userTenantId },
    });
  }
}
