import { Module } from '@nestjs/common';
import { TenantsService } from './tenants.service';
import { TenantsController } from './tenants.controller';
import { TenantsRepository } from './tenants.repository';

@Module({
  controllers: [TenantsController],
  providers: [
    TenantsService,
    {
      provide: 'ITenantRepository',
      useClass: TenantsRepository,
    },
  ],
})
export class TenantsModule {}
