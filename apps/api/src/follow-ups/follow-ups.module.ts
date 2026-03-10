import { Module } from '@nestjs/common';
import { FollowUpsService } from './follow-ups.service';
import { FollowUpsController } from './follow-ups.controller';
import { FollowUpsRepository } from './follow-ups.repository';

@Module({
  controllers: [FollowUpsController],
  providers: [
    FollowUpsService,
    {
      provide: 'IFollowUpRepository',
      useClass: FollowUpsRepository,
    },
  ],
  exports: [FollowUpsService],
})
export class FollowUpsModule {}
