import { Injectable } from '@nestjs/common';
import { CreateTenantFeatureDto } from './dto/create-tenant-feature.dto';
import { UpdateTenantFeatureDto } from './dto/update-tenant-feature.dto';

@Injectable()
export class TenantFeatureService {
  create(createTenantFeatureDto: CreateTenantFeatureDto) {
    return 'This action adds a new tenantFeature';
  }

  findAll() {
    return `This action returns all tenantFeature`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tenantFeature`;
  }

  update(id: number, updateTenantFeatureDto: UpdateTenantFeatureDto) {
    return `This action updates a #${id} tenantFeature`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenantFeature`;
  }
}
