import { Injectable } from '@nestjs/common';
import { TenantFeature } from 'generated/prisma';
import { ITenantFeatureRepository } from 'src/interface/ITenantFeatureRepository.interface';
import { CreateTenantFeatureDto } from './dto/create-tenant-feature.dto';
import { UpdateTenantFeatureDto } from './dto/update-tenant-feature.dto';

@Injectable()
export class TenantFeatureRepository implements ITenantFeatureRepository {
  create(data: CreateTenantFeatureDto): Promise<TenantFeature> {
    throw new Error('Method not implemented.');
  }
  findAllByTenant(tenantId: string): Promise<TenantFeature[]> {
    throw new Error('Method not implemented.');
  }
  findByFeature(
    feature: string,
    tenantId: string,
  ): Promise<TenantFeature | null> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: UpdateTenantFeatureDto): Promise<TenantFeature> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
