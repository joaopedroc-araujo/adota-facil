import { Injectable } from '@nestjs/common';
import { Animal } from 'generated/prisma';
import { IAnimalRepository } from 'src/interface/IAnimalRepository.interface';
import { CreateAnimalDto } from './dto/create-animal.dto';

@Injectable()
export class AnimalsRepository implements IAnimalRepository {
  createAnimal(animal: CreateAnimalDto, tenantId: string): Promise<Animal> {
    throw new Error('Method not implemented.');
  }
  findAllByTenant(tenantId: string): Promise<Animal[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string, tenantId: string): Promise<Animal | null> {
    throw new Error('Method not implemented.');
  }
  updateAnimal(
    id: string,
    animal: CreateAnimalDto,
    tenantId: string,
  ): Promise<Animal> {
    throw new Error('Method not implemented.');
  }
  deleteAnimal(id: string, tenantId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
