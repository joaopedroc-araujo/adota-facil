import { TenantFeature } from 'generated/prisma';
import { CreateTenantFeatureDto } from 'src/tenant-feature/dto/create-tenant-feature.dto';
import { UpdateTenantFeatureDto } from 'src/tenant-feature/dto/update-tenant-feature.dto';

export interface ITenantFeatureRepository {
  create(data: CreateTenantFeatureDto): Promise<TenantFeature>;
  findAllByTenant(tenantId: string): Promise<TenantFeature[]>;
  findByFeature(
    feature: string,
    tenantId: string,
  ): Promise<TenantFeature | null>;
  update(id: string, data: UpdateTenantFeatureDto): Promise<TenantFeature>;
  delete(id: string): Promise<void>;
}
