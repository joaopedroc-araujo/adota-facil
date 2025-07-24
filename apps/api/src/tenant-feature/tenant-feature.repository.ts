import { Injectable } from '@nestjs/common';
import { TenantFeature } from 'generated/prisma';
import { ITenantFeatureRepository } from 'src/interface/ITenantFeatureRepository.interface';
import { CreateTenantFeatureDto } from './dto/create-tenant-feature.dto';
import { UpdateTenantFeatureDto } from './dto/update-tenant-feature.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TenantFeatureRepository implements ITenantFeatureRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateTenantFeatureDto): Promise<TenantFeature> {
    return await this.prisma.tenantFeature.create({
      data: {
        tenantId: data.tenantId,
        feature: data.feature,
        enabled: data.enabled,
      },
    });
  }

  async findAllByTenant(tenantId: string): Promise<TenantFeature[]> {
    return await this.prisma.tenantFeature.findMany({
      where: {
        tenantId: tenantId,
      },
    });
  }

  async findByFeature(
    feature: string,
    tenantId: string,
  ): Promise<TenantFeature | null> {
    return await this.prisma.tenantFeature.findUnique({
      where: {
        feature_tenantId: {
          feature: feature,
          tenantId: tenantId,
        },
      },
    });
  }

  async update(
    id: string,
    data: UpdateTenantFeatureDto,
  ): Promise<TenantFeature> {
    return await this.prisma.tenantFeature.update({
      where: {
        id: id,
      },
      data: {
        tenantId: data.tenantId,
        feature: data.feature,
        enabled: data.enabled,
      },
    });
  }

  async delete(id: string): Promise<void> {
    return await this.prisma.tenantFeature.delete({
      where: {
        id: id,
      },
    });
  }
}
