import { Injectable } from '@nestjs/common';
import { IAdoptionRepository } from 'src/interface/IAdoptionRepository.interface';
import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Adoption } from 'generated/prisma';

@Injectable()
export class AdoptionsRepository implements IAdoptionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAdoptionDto, tenantId: string): Promise<Adoption> {
    return await this.prisma.withTenant(tenantId).adoption.create({
      data: {
        ...data,
        adoptionDate: data.adoptionDate
          ? new Date(data.adoptionDate)
          : undefined,
        tenantId,
      },
    });
  }

  async findAllByTenant(tenantId: string): Promise<Adoption[]> {
    return await this.prisma.withTenant(tenantId).adoption.findMany({
      include: { animal: true, adopter: true },
    });
  }

  async findById(id: string, tenantId: string): Promise<Adoption | null> {
    return await this.prisma.withTenant(tenantId).adoption.findUnique({
      where: { id },
      include: { animal: true, adopter: true, followUps: true },
    });
  }

  async update(
    id: string,
    data: UpdateAdoptionDto,
    tenantId: string,
  ): Promise<Adoption> {
    return await this.prisma.withTenant(tenantId).adoption.update({
      where: { id },
      data: {
        ...data,
        adoptionDate: data.adoptionDate
          ? new Date(data.adoptionDate)
          : undefined,
      },
    });
  }

  async delete(id: string, tenantId: string): Promise<void> {
    await this.prisma.withTenant(tenantId).adoption.delete({
      where: { id },
    });
  }
}
