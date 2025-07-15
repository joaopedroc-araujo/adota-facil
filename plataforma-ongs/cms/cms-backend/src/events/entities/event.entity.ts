import { Tenant } from 'src/tenants/entities/tenant.entity';

export class Event {
  id: string;
  tenantId: string;
  title: string;
  date: Date;
  description?: string;
  tenant?: Tenant;
}
