import { Injectable } from '@nestjs/common';
import { IEventRepository } from 'src/interface/IEventRepository.interface';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class EventsRepository implements IEventRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateEventDto, tenantId: string): Promise<Event> {
    return await this.prisma.withTenant(tenantId).event.create({
      data,
    });
  }

  async findAllByTenant(tenantId: string): Promise<Event[]> {
    return await this.prisma.withTenant(tenantId).event.findMany();
  }

  async findById(id: string, tenantId: string): Promise<Event | null> {
    return await this.prisma.withTenant(tenantId).event.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    data: UpdateEventDto,
    tenantId: string,
  ): Promise<Event> {
    return await this.prisma.withTenant(tenantId).event.update({
      where: { id },
      data,
    });
  }

  async delete(id: string, tenantId: string): Promise<void> {
    return await this.prisma.withTenant(tenantId).event.delete({
      where: { id },
    });
  }
}
