import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateTenantFeatureDto {
  @IsString()
  @IsNotEmpty()
  feature: string;

  @IsBoolean()
  enabled: boolean;
}
