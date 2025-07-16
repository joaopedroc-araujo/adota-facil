import { Injectable } from '@nestjs/common';
import { Animal } from 'generated/prisma';
import { IAnimalRepository } from 'src/interface/IAnimalRepository.interface';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AnimalsRepository implements IAnimalRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createAnimal(
    animal: CreateAnimalDto,
    tenantId: string,
  ): Promise<Animal> {
    return await this.prisma.animal.create({
      data: {
        ...animal,
        tenantId: tenantId,
      },
    });
  }

  async findAllByTenant(tenantId: string): Promise<Animal[]> {
    return await this.prisma.animal.findMany({
      where: {
        tenantId: tenantId,
      },
    });
  }

  async findById(id: string, tenantId: string): Promise<Animal | null> {
    return await this.prisma.animal.findUnique({
      where: {
        id: id,
        tenantId: tenantId,
      },
    });
  }

  async updateAnimal(
    id: string,
    animal: CreateAnimalDto,
    tenantId: string,
  ): Promise<Animal> {
    return await this.prisma.animal.update({
      where: {
        id: id,
        tenantId: tenantId,
      },
      data: animal,
    });
  }

  async deleteAnimal(id: string, tenantId: string): Promise<void> {
    return await this.prisma.animal.delete({
      where: {
        id: id,
        tenantId: tenantId,
      },
    });
  }
}
