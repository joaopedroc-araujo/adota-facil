import { Injectable } from '@nestjs/common';
import { Page } from 'generated/prisma';
import { IPageRepository } from 'src/interface/IPageRepository.interface';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PagesRepository implements IPageRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePageDto, tenantId: string): Promise<Page> {
    return await this.prisma.page.create({
      data: {
        ...data,
        tenantId: tenantId,
      },
    });
  }

  async findAllByTenant(tenantId: string): Promise<Page[]> {
    return await this.prisma.page.findMany({
      where: {
        tenantId: tenantId,
      },
    });
  }

  async findById(id: string, tenantId: string): Promise<Page | null> {
    return await this.prisma.page.findUnique({
      where: {
        id: id,
        tenantId: tenantId,
      },
    });
  }

  async findBySlug(slug: string, tenantId: string): Promise<Page | null> {
    return await this.prisma.page.findUnique({
      where: {
        slug: slug,
        tenantId: tenantId,
      },
    });
  }

  async update(
    id: string,
    data: UpdatePageDto,
    tenantId: string,
  ): Promise<Page> {
    return await this.prisma.page.update({
      where: {
        id: id,
        tenantId: tenantId,
      },
      data: data,
    });
  }

  async delete(id: string, tenantId: string): Promise<void> {
    return await this.prisma.page.delete({
      where: {
        id: id,
        tenantId: tenantId,
      },
    });
  }
}
