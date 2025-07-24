import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { IAnimalRepository } from 'src/interface/IAnimalRepository.interface';

@Injectable()
export class AnimalsService {
  constructor(
    @Inject('IAnimalRepository')
    private readonly animalRepository: IAnimalRepository,
  ) {}

  async create(createAnimalDto: CreateAnimalDto, tenantId: string) {
    return await this.animalRepository.create(createAnimalDto, tenantId);
  }

  async findAllByTenant(tenantId: string) {
    return await this.animalRepository.findAllByTenant(tenantId);
  }

  async findById(id: string, tenantId: string) {
    return await this.animalRepository.findById(id, tenantId);
  }

  async update(id: string, updateAnimalDto: UpdateAnimalDto, tenantId: string) {
    const animalExists = await this.animalRepository.findById(id, tenantId);
    if (!animalExists) {
      throw new NotFoundException(`Animal com o ID "${id}" não encontrado.`);
    }

    return await this.animalRepository.update(id, updateAnimalDto, tenantId);
  }

  async delete(id: string, tenantId: string) {
    return await this.animalRepository.delete(id, tenantId);
  }
}
