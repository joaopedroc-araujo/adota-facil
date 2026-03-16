import { Injectable } from '@nestjs/common';
import { IFollowUpRepository } from 'src/interface/IFollowUpRepository.interface';
import { CreateFollowUpDto } from './dto/create-follow-up.dto';
import { UpdateFollowUpDto } from './dto/update-follow-up.dto';
import { PrismaService } from 'src/database/prisma.service';
import { FollowUp } from 'generated/prisma';

@Injectable()
export class FollowUpsRepository implements IFollowUpRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateFollowUpDto, tenantId: string): Promise<FollowUp> {
    return await this.prisma.withTenant(tenantId).followUp.create({
      data: {
        adoptionId: data.adoptionId,
        scheduledDate: new Date(data.scheduledDate),
        label: data.label,
        notes: data.notes,
        tenantId,
      },
    });
  }

  async createMany(
    data: CreateFollowUpDto[],
    tenantId: string,
  ): Promise<{ count: number }> {
    return await this.prisma.withTenant(tenantId).followUp.createMany({
      data: data.map((item) => ({
        adoptionId: item.adoptionId,
        scheduledDate: new Date(item.scheduledDate),
        label: item.label,
        notes: item.notes,
        tenantId,
      })),
    });
  }

  async findAllByTenant(tenantId: string): Promise<FollowUp[]> {
    return await this.prisma.withTenant(tenantId).followUp.findMany({
      include: { adoption: { include: { animal: true, adopter: true } } },
      orderBy: { scheduledDate: 'asc' },
    });
  }

  async findById(id: string, tenantId: string): Promise<FollowUp | null> {
    return await this.prisma.withTenant(tenantId).followUp.findUnique({
      where: { id },
      include: { adoption: { include: { animal: true, adopter: true } } },
    });
  }

  async findByAdoption(
    adoptionId: string,
    tenantId: string,
  ): Promise<FollowUp[]> {
    return await this.prisma.withTenant(tenantId).followUp.findMany({
      where: { adoptionId },
      orderBy: { scheduledDate: 'asc' },
    });
  }

  async findPendingByDate(
    date: Date,
    tenantId: string,
  ): Promise<FollowUp[]> {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    return await this.prisma.withTenant(tenantId).followUp.findMany({
      where: {
        status: 'PENDING',
        scheduledDate: {
          lte: endOfDay,
        },
      },
      include: { adoption: { include: { animal: true, adopter: true } } },
      orderBy: { scheduledDate: 'asc' },
    });
  }

  async update(
    id: string,
    data: UpdateFollowUpDto,
    tenantId: string,
  ): Promise<FollowUp> {
    return await this.prisma.withTenant(tenantId).followUp.update({
      where: { id },
      data: {
        ...data,
        scheduledDate: data.scheduledDate
          ? new Date(data.scheduledDate)
          : undefined,
        completedDate: data.completedDate
          ? new Date(data.completedDate)
          : undefined,
      },
    });
  }

  async delete(id: string, tenantId: string): Promise<void> {
    await this.prisma.withTenant(tenantId).followUp.delete({
      where: { id },
    });
  }
}
