import { Animal } from 'generated/prisma';
import { CreateAnimalDto } from 'src/animals/dto/create-animal.dto';
import { UpdateAnimalDto } from 'src/animals/dto/update-animal.dto';

export interface IAnimalRepository {
  createAnimal(animal: CreateAnimalDto, tenantId: string): Promise<Animal>;
  findAllByTenant(tenantId: string): Promise<Animal[]>;
  findById(id: string, tenantId: string): Promise<Animal | null>;
  updateAnimal(
    id: string,
    animal: UpdateAnimalDto,
    tenantId: string,
  ): Promise<Animal>;
  deleteAnimal(id: string, tenantId: string): Promise<void>;
}
