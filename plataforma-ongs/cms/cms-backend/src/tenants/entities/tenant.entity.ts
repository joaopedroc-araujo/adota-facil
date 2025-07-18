import { Animal } from 'src/animals/entities/animal.entity';
import { Media } from 'src/media/entities/media.entity';
import { Page } from 'src/pages/entities/page.entity';
import { TenantFeature } from 'src/tenant-feature/entities/tenant-feature.entity';
import { UserTenant } from 'src/user-tenant/entities/user-tenant.entity';

export class Tenant {
  id: string;
  name: string;
  subdomain: string;
  config?: any; // JSON
  animals?: Animal[];
  events?: Event[];
  media?: Media[];
  pages?: Page[];
  userTenants?: UserTenant[];
  features?: TenantFeature[];
  createdAt: Date;
}
