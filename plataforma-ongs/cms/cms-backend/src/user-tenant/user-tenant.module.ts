import { Module } from '@nestjs/common';
import { UserTenantService } from './user-tenant.service';
import { UserTenantController } from './user-tenant.controller';
import { UserTenantRepository } from './user-tenant.repository';

@Module({
  controllers: [UserTenantController],
  providers: [
    UserTenantService,
    {
      provide: 'IUserTenantRepository',
      useClass: UserTenantRepository, // Assuming UserTenantRepository is implemented similarly to TenantsRepository
    },
  ],
})
export class UserTenantModule {}
