import { Injectable } from '@nestjs/common';
import { Media } from 'generated/prisma';
import { IMediaRepository } from 'src/interface/IMediaRepository.interface';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class MediaRepository implements IMediaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateMediaDto, tenantId: string): Promise<Media> {
    return await this.prisma.media.create({
      data: {
        ...data,
        tenantId: tenantId,
      },
    });
  }

  async findAllByTenant(tenantId: string): Promise<Media[]> {
    return await this.prisma.media.findMany({
      where: {
        tenantId: tenantId,
      },
    });
  }

  async findById(id: string, tenantId: string): Promise<Media | null> {
    return await this.prisma.media.findUnique({
      where: {
        id: id,
        tenantId: tenantId,
      },
    });
  }

  async update(
    id: string,
    data: UpdateMediaDto,
    tenantId: string,
  ): Promise<Media> {
    return await this.prisma.media.update({
      where: {
        id: id,
        tenantId: tenantId,
      },
      data: data,
    });
  }

  async delete(id: string, tenantId: string): Promise<void> {
    return await this.prisma.media.delete({
      where: {
        id: id,
        tenantId: tenantId,
      },
    });
  }
}
