import { Inject, Injectable } from '@nestjs/common';
import { CreateTenantFeatureDto } from './dto/create-tenant-feature.dto';
import { UpdateTenantFeatureDto } from './dto/update-tenant-feature.dto';
import { ITenantFeatureRepository } from 'src/interface/ITenantFeatureRepository.interface';

@Injectable()
export class TenantFeatureService {
  constructor(
    @Inject('ITenantFeatureRepository')
    private readonly tenantFeatureRepository: ITenantFeatureRepository,
  ) {}

  async create(
    createTenantFeatureDto: CreateTenantFeatureDto,
    tenantId: string,
  ) {
    const tenantFeature = await this.tenantFeatureRepository.create(
      createTenantFeatureDto,
      tenantId,
    );

    if (!tenantFeature) throw new Error('Failed to create tenant feature');

    return tenantFeature;
  }

  async findAllByTenant(tenantId: string) {
    return await this.tenantFeatureRepository.findAllByTenant(tenantId);
  }

  async findByFeature(tenantId: string, feature: string) {
    return await this.tenantFeatureRepository.findByFeature(tenantId, feature);
  }

  async update(
    id: string,
    updateTenantFeatureDto: UpdateTenantFeatureDto,
    tenantId: string,
  ) {
    return await this.tenantFeatureRepository.update(
      id,
      updateTenantFeatureDto,
      tenantId,
    );
  }

  async delete(id: string, tenantId: string) {
    return await this.tenantFeatureRepository.delete(id, tenantId);
  }
}
