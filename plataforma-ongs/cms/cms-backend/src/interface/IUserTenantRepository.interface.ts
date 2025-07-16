import { UserTenant } from 'generated/prisma';
import { CreateUserTenantDto } from 'src/user-tenant/dto/create-user-tenant.dto';
import { UpdateUserTenantDto } from 'src/user-tenant/dto/update-user-tenant.dto';

export interface IUserTenantRepository {
  create(data: CreateUserTenantDto): Promise<UserTenant>;
  findByUserAndTenant(
    userId: string,
    tenantId: string,
  ): Promise<UserTenant | null>;
  updateRole(
    userTenantId: string,
    data: UpdateUserTenantDto,
  ): Promise<UserTenant>;
  delete(userTenantId: string): Promise<void>;
}
