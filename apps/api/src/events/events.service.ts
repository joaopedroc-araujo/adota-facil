import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { IEventRepository } from 'src/interface/IEventRepository.interface';

@Injectable()
export class EventsService {
  constructor(
    @Inject('IEventRepository')
    private readonly eventRepository: IEventRepository,
  ) {}

  async create(createEventDto: CreateEventDto, tenantId: string) {
    if (new Date(createEventDto.date) < new Date()) {
      throw new BadRequestException(
        'Não é possível criar um evento com uma data no passado.',
      );
    }
    return await this.eventRepository.create(createEventDto, tenantId);
  }

  async findAllByTenant(tenantId: string) {
    return await this.eventRepository.findAllByTenant(tenantId);
  }

  async findById(id: string, tenantId: string) {
    const event = await this.eventRepository.findById(id, tenantId);
    if (!event) {
      throw new NotFoundException(`Evento com o ID "${id}" não encontrado.`);
    }
    return event;
  }

  async update(id: string, updateEventDto: CreateEventDto, tenantId: string) {
    const eventExists = await this.eventRepository.findById(id, tenantId);
    if (!eventExists) {
      throw new NotFoundException(`Evento com o ID "${id}" não encontrado.`);
    }

    if (new Date(updateEventDto.date) < new Date()) {
      throw new BadRequestException(
        'Não é possível atualizar um evento para uma data no passado.',
      );
    }

    return await this.eventRepository.update(id, updateEventDto, tenantId);
  }

  async delete(id: string, tenantId: string) {
    const eventExists = await this.eventRepository.findById(id, tenantId);
    if (!eventExists) {
      throw new NotFoundException(`Evento com o ID "${id}" não encontrado.`);
    }
    return await this.eventRepository.delete(id, tenantId);
  }
}
