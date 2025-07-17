import { Inject, Injectable } from '@nestjs/common';
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
    return await this.animalRepository.createAnimal(createAnimalDto, tenantId);
  }

  async findAllByTenant(tenantId: string) {
    return await this.animalRepository.findAllByTenant(tenantId);
  }

  async findById(id: string, tenantId: string) {
    return await this.animalRepository.findById(id, tenantId);
  }

  async update(id: string, updateAnimalDto: UpdateAnimalDto, tenantId: string) {
    return await this.animalRepository.updateAnimal(
      id,
      updateAnimalDto,
      tenantId,
    );
  }

  async delete(id: string, tenantId: string) {
    return await this.animalRepository.deleteAnimal(id, tenantId);
  }
}
