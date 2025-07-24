import { IsUUID, IsEnum, IsOptional } from 'class-validator';
import { UserRole } from 'src/enums/user-role.enum';
import { Tenant } from 'src/tenants/entities/tenant.entity';
import { User } from 'src/users/entities/user.entity';

export class UserTenant {
  @IsUUID()
  id: string;

  @IsUUID()
  userId: string;

  @IsUUID()
  tenantId: string;

  @IsEnum(UserRole)
  role: UserRole;

  @IsOptional()
  user?: User;

  @IsOptional()
  tenant?: Tenant;
}
