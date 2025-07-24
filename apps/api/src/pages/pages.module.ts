import { Module } from '@nestjs/common';
import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import { PagesRepository } from './pages.repository';

@Module({
  controllers: [PagesController],
  providers: [
    PagesService,
    {
      provide: 'IPageRepository',
      useClass: PagesRepository,
    },
  ],
})
export class PagesModule {}
