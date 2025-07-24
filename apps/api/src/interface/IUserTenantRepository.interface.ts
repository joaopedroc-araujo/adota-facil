import { CreateUserTenantDto } from 'src/user-tenant/dto/create-user-tenant.dto';
import { UpdateUserTenantDto } from 'src/user-tenant/dto/update-user-tenant.dto';
import { Prisma } from 'generated/prisma';

export type UserTenantWithUserAndTenant = Prisma.UserTenantGetPayload<{
  include: { user: true; tenant: true };
}>;

export interface IUserTenantRepository {
  create(
    data: CreateUserTenantDto,
    tenantId: string,
  ): Promise<UserTenantWithUserAndTenant>;
  findByUserAndTenant(
    userId: string,
    tenantId: string,
  ): Promise<UserTenantWithUserAndTenant | null>;
  findByEmailAndTenant(
    email: string,
    tenantId: string,
  ): Promise<UserTenantWithUserAndTenant | null>;
  updateRole(
    userTenantId: string,
    data: UpdateUserTenantDto,
    tenantId: string,
  ): Promise<UserTenantWithUserAndTenant>;
  delete(userTenantId: string, tenantId: string): Promise<void>;
}
