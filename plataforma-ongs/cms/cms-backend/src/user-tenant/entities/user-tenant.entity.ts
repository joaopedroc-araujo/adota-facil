import { Tenant } from 'src/tenants/entities/tenant.entity';
import { User } from 'src/users/entities/user.entity';

export class UserTenant {
  id: string;
  userId: string;
  tenantId: string;
  role: string;
  user?: User;
  tenant?: Tenant;
}
