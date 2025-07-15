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

@Module({
  imports: [
    MediaModule,
    EventsModule,
    PagesModule,
    TenantsModule,
    UsersModule,
    AnimalsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
