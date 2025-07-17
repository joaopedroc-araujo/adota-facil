import { Module } from '@nestjs/common';
import { TenantFeatureService } from './tenant-feature.service';
import { TenantFeatureController } from './tenant-feature.controller';
import { TenantFeatureRepository } from './tenant-feature.repository';

@Module({
  controllers: [TenantFeatureController],
  providers: [
    TenantFeatureService,
    {
      provide: 'ITenantFeatureRepository',
      useClass: TenantFeatureRepository,
    },
  ],
})
export class TenantFeatureModule {}
