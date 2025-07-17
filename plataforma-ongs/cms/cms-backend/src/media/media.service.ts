import { Inject, Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { IMediaRepository } from 'src/interface/IMediaRepository.interface';
import { Media } from './entities/media.entity';

@Injectable()
export class MediaService {
  constructor(
    @Inject('IMediaRepository')
    private readonly mediaRepository: IMediaRepository,
  ) {}

  async create(
    createMediaDto: CreateMediaDto,
    tenantId: string,
  ): Promise<Media> {
    return this.mediaRepository.create(createMediaDto, tenantId);
  }

  async findAllByTenant(tenantId: string): Promise<Media[]> {
    return this.mediaRepository.findAllByTenant(tenantId);
  }

  async findById(id: string, tenantId: string): Promise<Media | null> {
    return this.mediaRepository.findById(id, tenantId);
  }

  async update(
    id: string,
    updateMediaDto: UpdateMediaDto,
    tenantId: string,
  ): Promise<Media> {
    return this.mediaRepository.update(id, updateMediaDto, tenantId);
  }

  async delete(id: string, tenantId: string): Promise<void> {
    return this.mediaRepository.delete(id, tenantId);
  }
}
