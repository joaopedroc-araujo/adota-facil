import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaModule } from './media/media.module';
import { EventsModule } from './events/events.module';
import { PagesModule } from './pages/pages.module';
import { TenantsModule } from './tenants/tenants.module';
import { UsersModule } from './users/users.module';
import { AnimalsModule } from './animals/animals.module';
import { AuthModule } from './auth/auth.module';
import { UserTenantModule } from './user-tenant/user-tenant.module';
import { TenantFeatureModule } from './tenant-feature/tenant-feature.module';
import { AdoptionsModule } from './adoptions/adoptions.module';
import { FollowUpsModule } from './follow-ups/follow-ups.module';

@Module({
  imports: [
    MediaModule,
    EventsModule,
    PagesModule,
    TenantsModule,
    UsersModule,
    AnimalsModule,
    AuthModule,
    UserTenantModule,
    TenantFeatureModule,
    AdoptionsModule,
    FollowUpsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
