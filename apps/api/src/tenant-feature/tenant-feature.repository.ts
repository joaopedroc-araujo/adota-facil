import { Injectable } from '@nestjs/common';
import { TenantFeature } from 'generated/prisma';
import { ITenantFeatureRepository } from 'src/interface/ITenantFeatureRepository.interface';
import { CreateTenantFeatureDto } from './dto/create-tenant-feature.dto';
import { UpdateTenantFeatureDto } from './dto/update-tenant-feature.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TenantFeatureRepository implements ITenantFeatureRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: CreateTenantFeatureDto,
    tenantId: string,
  ): Promise<TenantFeature> {
    return await this.prisma.withTenant(tenantId).tenantFeature.create({
      data: {
        ...data,
        tenantId: tenantId,
      },
    });
  }

  async findAllByTenant(tenantId: string): Promise<TenantFeature[]> {
    return await this.prisma.withTenant(tenantId).tenantFeature.findMany();
  }

  async findByFeature(
    feature: string,
    tenantId: string,
  ): Promise<TenantFeature | null> {
    return await this.prisma.withTenant(tenantId).tenantFeature.findFirst({
      where: { feature },
    });
  }

  async update(
    id: string,
    data: UpdateTenantFeatureDto,
    tenantId: string,
  ): Promise<TenantFeature> {
    return await this.prisma.withTenant(tenantId).tenantFeature.update({
      where: { id },
      data,
    });
  }

  async delete(id: string, tenantId: string): Promise<void> {
    return await this.prisma.withTenant(tenantId).tenantFeature.delete({
      where: { id },
    });
  }
}
