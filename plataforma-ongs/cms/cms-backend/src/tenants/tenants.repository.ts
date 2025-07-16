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
    return await this.prisma.tenant.create({
      data: {
        name: data.name,
        subdomain: data.subdomain,
      },
    });
  }

  async findById(id: string): Promise<Tenant | null> {
    return await this.prisma.tenant.findUnique({
      where: {
        id: id,
      },
    });
  }

  async findBySubdomain(subdomain: string): Promise<Tenant | null> {
    return await this.prisma.tenant.findUnique({
      where: {
        subdomain: subdomain,
      },
    });
  }

  async update(id: string, data: UpdateTenantDto): Promise<Tenant> {
    return await this.prisma.tenant.update({
      where: {
        id: id,
      },
      data: {
        name: data.name,
        subdomain: data.subdomain,
      },
    });
  }

  async delete(id: string): Promise<void> {
    return await this.prisma.tenant.delete({
      where: {
        id: id,
      },
    });
  }
}
