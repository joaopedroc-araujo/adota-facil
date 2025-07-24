import { PartialType } from '@nestjs/mapped-types';
import { CreateTenantFeatureDto } from './create-tenant-feature.dto';

export class UpdateTenantFeatureDto extends PartialType(CreateTenantFeatureDto) {}
