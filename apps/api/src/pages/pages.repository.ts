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
    return await this.prisma.withTenant(tenantId).page.create({
      data,
    });
  }

  async findAllByTenant(tenantId: string): Promise<Page[]> {
    return await this.prisma.withTenant(tenantId).page.findMany();
  }

  async findById(id: string, tenantId: string): Promise<Page | null> {
    return await this.prisma.withTenant(tenantId).page.findUnique({
      where: { id },
    });
  }

  async findBySlug(slug: string, tenantId: string): Promise<Page | null> {
    return await this.prisma.withTenant(tenantId).page.findFirst({
      where: { slug },
    });
  }

  async update(
    id: string,
    data: UpdatePageDto,
    tenantId: string,
  ): Promise<Page> {
    return await this.prisma.withTenant(tenantId).page.update({
      where: { id },
      data,
    });
  }

  async delete(id: string, tenantId: string): Promise<void> {
    return await this.prisma.withTenant(tenantId).page.delete({
      where: { id },
    });
  }
}
