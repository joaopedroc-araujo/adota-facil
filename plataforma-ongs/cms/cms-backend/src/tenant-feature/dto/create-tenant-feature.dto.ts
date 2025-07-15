import { IsUUID, IsString, IsBoolean } from 'class-validator';

export class CreateTenantFeatureDto {
  @IsUUID()
  tenantId: string;

  @IsString()
  feature: string;

  @IsBoolean()
  enabled: boolean;
}
