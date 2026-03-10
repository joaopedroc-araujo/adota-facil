import { Module } from '@nestjs/common';
import { AdoptionsService } from './adoptions.service';
import { AdoptionsController } from './adoptions.controller';
import { AdoptionsRepository } from './adoptions.repository';
import { FollowUpsModule } from 'src/follow-ups/follow-ups.module';

@Module({
  imports: [FollowUpsModule],
  controllers: [AdoptionsController],
  providers: [
    AdoptionsService,
    {
      provide: 'IAdoptionRepository',
      useClass: AdoptionsRepository,
    },
  ],
})
export class AdoptionsModule {}
