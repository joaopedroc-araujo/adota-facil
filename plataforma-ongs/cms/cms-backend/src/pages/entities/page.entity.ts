import { Tenant } from 'src/tenants/entities/tenant.entity';

export class Page {
  id: string;
  tenantId: string;
  slug: string;
  content: string;
  tenant?: Tenant;
}
