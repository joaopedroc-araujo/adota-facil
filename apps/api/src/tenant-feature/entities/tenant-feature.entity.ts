import { Tenant } from 'src/tenants/entities/tenant.entity';

export class TenantFeature {
  id: string;
  tenantId: string;
  feature: string;
  enabled: boolean;
  tenant?: Tenant;
}
