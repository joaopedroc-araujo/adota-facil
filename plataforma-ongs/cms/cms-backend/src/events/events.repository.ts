import { Injectable } from '@nestjs/common';
import { IEventRepository } from 'src/interface/IEventRepository.interface';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsRepository implements IEventRepository {
  create(data: CreateEventDto, tenantId: string): Promise<Event> {
    throw new Error('Method not implemented.');
  }
  findAllByTenant(tenantId: string): Promise<Event[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string, tenantId: string): Promise<Event | null> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: UpdateEventDto, tenantId: string): Promise<Event> {
    throw new Error('Method not implemented.');
  }
  delete(id: string, tenantId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
