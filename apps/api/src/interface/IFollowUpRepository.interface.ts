import { FollowUp } from 'generated/prisma';
import { CreateFollowUpDto } from 'src/follow-ups/dto/create-follow-up.dto';
import { UpdateFollowUpDto } from 'src/follow-ups/dto/update-follow-up.dto';

export interface IFollowUpRepository {
  create(data: CreateFollowUpDto, tenantId: string): Promise<FollowUp>;
  createMany(
    data: CreateFollowUpDto[],
    tenantId: string,
  ): Promise<{ count: number }>;
  findAllByTenant(tenantId: string): Promise<FollowUp[]>;
  findById(id: string, tenantId: string): Promise<FollowUp | null>;
  findByAdoption(adoptionId: string, tenantId: string): Promise<FollowUp[]>;
  findPendingByDate(
    date: Date,
    tenantId: string,
  ): Promise<FollowUp[]>;
  update(
    id: string,
    data: UpdateFollowUpDto,
    tenantId: string,
  ): Promise<FollowUp>;
  delete(id: string, tenantId: string): Promise<void>;
}
