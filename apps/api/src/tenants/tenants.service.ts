import { Inject, Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { ITenantRepository } from 'src/interface/ITenantRepository.interface';

@Injectable()
export class TenantsService {
  constructor(
    @Inject('ITenantRepository')
    private readonly tenantRepository: ITenantRepository,
  ) {}

  async create(createTenantDto: CreateTenantDto) {
    const newTenant = await this.tenantRepository.create(createTenantDto);

    if (!newTenant) throw new Error('Tenant creation failed');

    return newTenant;
  }

  async findById(id: string) {
    const tenant = await this.tenantRepository.findById(id);

    if (!tenant) throw new Error('Tenant not found');

    return tenant;
  }

  async findBySubdomain(subdomain: string) {
    const tenant = await this.tenantRepository.findBySubdomain(subdomain);

    if (!tenant) throw new Error('Tenant not found');

    return tenant;
  }

  async update(id: string, updateTenantDto: UpdateTenantDto) {
    const updatedTenant = await this.tenantRepository.update(
      id,
      updateTenantDto,
    );

    if (!updatedTenant) throw new Error('Tenant update failed');

    return updatedTenant;
  }

  async remove(id: string) {
    const tenant = await this.tenantRepository.findById(id);

    if (!tenant) throw new Error('Tenant not found');

    await this.tenantRepository.delete(tenant.id);
  }
}
