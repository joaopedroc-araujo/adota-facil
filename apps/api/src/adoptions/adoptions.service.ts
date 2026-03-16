import {
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';
import { IAdoptionRepository } from 'src/interface/IAdoptionRepository.interface';
import { FollowUpsService } from 'src/follow-ups/follow-ups.service';

@Injectable()
export class AdoptionsService {
  constructor(
    @Inject('IAdoptionRepository')
    private readonly adoptionRepository: IAdoptionRepository,
    private readonly followUpsService: FollowUpsService,
  ) {}

  async create(createAdoptionDto: CreateAdoptionDto, tenantId: string) {
    const adoption = await this.adoptionRepository.create(
      createAdoptionDto,
      tenantId,
    );

    const adoptionDate = adoption.adoptionDate || adoption.createdAt;
    await this.followUpsService.generateForAdoption(
      adoption.id,
      adoptionDate,
      tenantId,
    );

    return adoption;
  }

  async findAllByTenant(tenantId: string) {
    return await this.adoptionRepository.findAllByTenant(tenantId);
  }

  async findById(id: string, tenantId: string) {
    const adoption = await this.adoptionRepository.findById(id, tenantId);
    if (!adoption) {
      throw new NotFoundException(`Adoção com o ID "${id}" não encontrada.`);
    }
    return adoption;
  }

  async update(
    id: string,
    updateAdoptionDto: UpdateAdoptionDto,
    tenantId: string,
  ) {
    const existing = await this.adoptionRepository.findById(id, tenantId);
    if (!existing) {
      throw new NotFoundException(`Adoção com o ID "${id}" não encontrada.`);
    }
    return await this.adoptionRepository.update(
      id,
      updateAdoptionDto,
      tenantId,
    );
  }

  async delete(id: string, tenantId: string) {
    const existing = await this.adoptionRepository.findById(id, tenantId);
    if (!existing) {
      throw new NotFoundException(`Adoção com o ID "${id}" não encontrada.`);
    }
    return await this.adoptionRepository.delete(id, tenantId);
  }
}
