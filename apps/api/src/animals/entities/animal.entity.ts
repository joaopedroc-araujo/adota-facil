import { Tenant } from 'src/tenants/entities/tenant.entity';

export class Animal {
  id: string;
  tenantId: string;
  name: string;
  description: string;
  foto: string;
  createdAt: Date;
  tenant?: Tenant;
}
