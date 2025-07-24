import { Tenant } from 'generated/prisma';
import { CreateTenantDto } from 'src/tenants/dto/create-tenant.dto';
import { UpdateTenantDto } from 'src/tenants/dto/update-tenant.dto';

export interface ITenantRepository {
  create(data: CreateTenantDto): Promise<Tenant>;
  findAll(): Promise<Tenant[]>;
  findById(id: string): Promise<Tenant | null>;
  findBySubdomain(subdomain: string): Promise<Tenant | null>;
  update(id: string, data: UpdateTenantDto): Promise<Tenant>;
  delete(id: string): Promise<void>;
}
