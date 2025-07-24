import { Injectable } from '@nestjs/common';
import { IAnimalRepository } from 'src/interface/IAnimalRepository.interface';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from 'generated/prisma';

@Injectable()
export class AnimalsRepository implements IAnimalRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAnimalDto, tenantId: string): Promise<Animal> {
    return await this.prisma.withTenant(tenantId).animal.create({
      data,
    });
  }

  async findAllByTenant(tenantId: string): Promise<Animal[]> {
    return await this.prisma.withTenant(tenantId).animal.findMany();
  }

  async findById(id: string, tenantId: string): Promise<Animal | null> {
    return await this.prisma.withTenant(tenantId).animal.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    data: UpdateAnimalDto,
    tenantId: string,
  ): Promise<Animal> {
    return await this.prisma.withTenant(tenantId).animal.update({
      where: { id },
      data,
    });
  }

  async delete(id: string, tenantId: string): Promise<void> {
    return await this.prisma.withTenant(tenantId).animal.delete({
      where: { id },
    });
  }
}
