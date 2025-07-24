import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { ITenantRepository } from 'src/interface/ITenantRepository.interface';

@Injectable()
export class TenantsService {
  constructor(
    @Inject('ITenantRepository')
    private readonly tenantRepository: ITenantRepository,
  ) {}

  private async getTenantById(id: string) {
    const tenant = await this.tenantRepository.findById(id);
    if (!tenant) {
      throw new NotFoundException(`Tenant com o ID "${id}" não encontrado.`);
    }
    return tenant;
  }

  async create(createTenantDto: CreateTenantDto) {
    const existingTenant = await this.tenantRepository.findBySubdomain(
      createTenantDto.subdomain,
    );
    if (existingTenant) {
      throw new ConflictException(
        `O subdomínio "${createTenantDto.subdomain}" já está em uso.`,
      );
    }
    return await this.tenantRepository.create(createTenantDto);
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
    await this.getTenantById(id);
    await this.tenantRepository.delete(id);
  }
}
