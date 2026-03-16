import {
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFollowUpDto } from './dto/create-follow-up.dto';
import { UpdateFollowUpDto } from './dto/update-follow-up.dto';
import { IFollowUpRepository } from 'src/interface/IFollowUpRepository.interface';

@Injectable()
export class FollowUpsService {
  constructor(
    @Inject('IFollowUpRepository')
    private readonly followUpRepository: IFollowUpRepository,
  ) {}

  async generateForAdoption(
    adoptionId: string,
    adoptionDate: Date,
    tenantId: string,
  ) {
    const intervals = [
      { days: 7, label: 'Acompanhamento de 7 dias' },
      { days: 30, label: 'Acompanhamento de 30 dias' },
      { days: 180, label: 'Acompanhamento de 6 meses' },
    ];

    const followUps: CreateFollowUpDto[] = intervals.map(({ days, label }) => {
      const scheduledDate = new Date(adoptionDate);
      scheduledDate.setDate(scheduledDate.getDate() + days);

      return {
        adoptionId,
        scheduledDate: scheduledDate.toISOString(),
        label,
      };
    });

    return await this.followUpRepository.createMany(followUps, tenantId);
  }

  async findAllByTenant(tenantId: string) {
    return await this.followUpRepository.findAllByTenant(tenantId);
  }

  async findById(id: string, tenantId: string) {
    const followUp = await this.followUpRepository.findById(id, tenantId);
    if (!followUp) {
      throw new NotFoundException(
        `Follow-up com o ID "${id}" não encontrado.`,
      );
    }
    return followUp;
  }

  async findByAdoption(adoptionId: string, tenantId: string) {
    return await this.followUpRepository.findByAdoption(adoptionId, tenantId);
  }

  async findPendingByDate(date: Date, tenantId: string) {
    return await this.followUpRepository.findPendingByDate(date, tenantId);
  }

  async update(
    id: string,
    updateFollowUpDto: UpdateFollowUpDto,
    tenantId: string,
  ) {
    const existing = await this.followUpRepository.findById(id, tenantId);
    if (!existing) {
      throw new NotFoundException(
        `Follow-up com o ID "${id}" não encontrado.`,
      );
    }
    return await this.followUpRepository.update(
      id,
      updateFollowUpDto,
      tenantId,
    );
  }

  async delete(id: string, tenantId: string) {
    const existing = await this.followUpRepository.findById(id, tenantId);
    if (!existing) {
      throw new NotFoundException(
        `Follow-up com o ID "${id}" não encontrado.`,
      );
    }
    return await this.followUpRepository.delete(id, tenantId);
  }
}
