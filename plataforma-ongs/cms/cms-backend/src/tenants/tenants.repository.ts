import { Tenant } from 'generated/prisma';
import { ITenantRepository } from 'src/interface/ITenantRepository.interface';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TenantsRepository implements ITenantRepository {
  create(data: CreateTenantDto): Promise<Tenant> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Tenant | null> {
    throw new Error('Method not implemented.');
  }
  findBySubdomain(subdomain: string): Promise<Tenant | null> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: UpdateTenantDto): Promise<Tenant> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
