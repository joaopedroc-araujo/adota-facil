import { Injectable } from '@nestjs/common';
import { IEventRepository } from 'src/interface/IEventRepository.interface';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class EventsRepository implements IEventRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateEventDto, tenantId: string): Promise<Event> {
    return await this.prisma.event.create({
      data: {
        ...data,
        tenantId: tenantId,
      },
    });
  }

  async findAllByTenant(tenantId: string): Promise<Event[]> {
    return await this.prisma.event.findMany({
      where: {
        tenantId: tenantId,
      },
    });
  }

  async findById(id: string, tenantId: string): Promise<Event | null> {
    return await this.prisma.event.findUnique({
      where: {
        id: id,
        tenantId: tenantId,
      },
    });
  }

  async update(
    id: string,
    data: UpdateEventDto,
    tenantId: string,
  ): Promise<Event> {
    return await this.prisma.event.update({
      where: {
        id: id,
        tenantId: tenantId,
      },
      data: data,
    });
  }

  async delete(id: string, tenantId: string): Promise<void> {
    return await this.prisma.event.delete({
      where: {
        id: id,
        tenantId: tenantId,
      },
    });
  }
}
