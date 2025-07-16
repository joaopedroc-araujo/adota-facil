import { Media } from 'generated/prisma';
import { CreateMediaDto } from 'src/media/dto/create-media.dto';
import { UpdateMediaDto } from 'src/media/dto/update-media.dto';

export interface IMediaRepository {
  create(data: CreateMediaDto, tenantId: string): Promise<Media>;
  findAllByTenant(tenantId: string): Promise<Media[]>;
  findById(id: string, tenantId: string): Promise<Media | null>;
  update(id: string, data: UpdateMediaDto, tenantId: string): Promise<Media>;
  delete(id: string, tenantId: string): Promise<void>;
}
