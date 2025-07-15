import { Module } from '@nestjs/common';
import { TenantFeatureService } from './tenant-feature.service';
import { TenantFeatureController } from './tenant-feature.controller';

@Module({
  controllers: [TenantFeatureController],
  providers: [TenantFeatureService],
})
export class TenantFeatureModule {}
