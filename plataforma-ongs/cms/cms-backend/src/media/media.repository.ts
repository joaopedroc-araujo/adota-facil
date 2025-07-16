import { Injectable } from '@nestjs/common';
import { Media } from 'generated/prisma';
import { IMediaRepository } from 'src/interface/IMediaRepository.interface';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';

@Injectable()
export class MediaRepository implements IMediaRepository {
  create(data: CreateMediaDto, tenantId: string): Promise<Media> {
    throw new Error('Method not implemented.');
  }
  findAllByTenant(tenantId: string): Promise<Media[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string, tenantId: string): Promise<Media | null> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: UpdateMediaDto, tenantId: string): Promise<Media> {
    throw new Error('Method not implemented.');
  }
  delete(id: string, tenantId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
