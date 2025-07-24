import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { AnimalsRepository } from './animals.repository';

@Module({
  controllers: [AnimalsController],
  providers: [
    AnimalsService,
    {
      provide: 'IAnimalRepository',
      useClass: AnimalsRepository,
    },
  ],
})
export class AnimalsModule {}
