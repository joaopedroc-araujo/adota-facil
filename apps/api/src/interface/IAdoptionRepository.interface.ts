import { Adoption } from 'generated/prisma';
import { CreateAdoptionDto } from 'src/adoptions/dto/create-adoption.dto';
import { UpdateAdoptionDto } from 'src/adoptions/dto/update-adoption.dto';

export interface IAdoptionRepository {
  create(data: CreateAdoptionDto, tenantId: string): Promise<Adoption>;
  findAllByTenant(tenantId: string): Promise<Adoption[]>;
  findById(id: string, tenantId: string): Promise<Adoption | null>;
  update(
    id: string,
    data: UpdateAdoptionDto,
    tenantId: string,
  ): Promise<Adoption>;
  delete(id: string, tenantId: string): Promise<void>;
}
