import { UserTenant } from 'src/user-tenant/entities/user-tenant.entity';

export class User {
  id: string;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  userTenants?: UserTenant[];
}
