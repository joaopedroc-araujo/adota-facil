import { Tenant } from 'generated/prisma';
import { ITenantRepository } from 'src/interface/ITenantRepository.interface';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TenantsRepository implements ITenantRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateTenantDto): Promise<Tenant> {
    return await this.prisma.tenant.create({ data });
  }

  async findAll(): Promise<Tenant[]> {
    return await this.prisma.tenant.findMany();
  }

  async findById(id: string): Promise<Tenant | null> {
    return await this.prisma.tenant.findUnique({
      where: { id },
    });
  }

  async findBySubdomain(subdomain: string): Promise<Tenant | null> {
    return await this.prisma.tenant.findUnique({
      where: { subdomain },
    });
  }

  async update(id: string, data: UpdateTenantDto): Promise<Tenant> {
    return await this.prisma.tenant.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    return await this.prisma.tenant.delete({
      where: { id },
    });
  }
}
