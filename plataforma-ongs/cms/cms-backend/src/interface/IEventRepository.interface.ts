import { CreateEventDto } from 'src/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/events/dto/update-event.dto';

export interface IEventRepository {
  create(data: CreateEventDto, tenantId: string): Promise<Event>;
  findAllByTenant(tenantId: string): Promise<Event[]>;
  findById(id: string, tenantId: string): Promise<Event | null>;
  update(id: string, data: UpdateEventDto, tenantId: string): Promise<Event>;
  delete(id: string, tenantId: string): Promise<void>;
}
