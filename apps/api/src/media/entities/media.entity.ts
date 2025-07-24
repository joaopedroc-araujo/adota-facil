import { Tenant } from 'src/tenants/entities/tenant.entity';

export class Media {
  id: string;
  tenantId: string;
  url: string;
  type: string;
  tenant?: Tenant;
}
