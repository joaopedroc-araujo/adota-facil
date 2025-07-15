import { IsEnum, IsUUID, isUUID } from 'class-validator';
import { UserRole } from 'src/enums/user-role.enum';

export class CreateUserTenantDto {
  @IsUUID()
  userId: string;

  @IsEnum(UserRole)
  role: UserRole;
}
