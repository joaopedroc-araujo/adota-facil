import { Inject, Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { IPageRepository } from 'src/interface/IPageRepository.interface';
import { Page } from './entities/page.entity';

@Injectable()
export class PagesService {
  constructor(
    @Inject('IPageRepository')
    private readonly pagesRepository: IPageRepository,
  ) {}

  async create(data: CreatePageDto, tenantId: string): Promise<Page> {
    return await this.pagesRepository.create(data, tenantId);
  }

  async findAllByTenant(tenantId: string): Promise<Page[]> {
    return await this.pagesRepository.findAllByTenant(tenantId);
  }

  async findById(id: string, tenantId: string): Promise<Page> {
    return await this.pagesRepository.findById(id, tenantId);
  }

  async findBySlug(slug: string, tenantId: string): Promise<Page | null> {
    return await this.pagesRepository.findBySlug(slug, tenantId);
  }

  async update(
    id: string,
    updatePageDto: UpdatePageDto,
    tenantId: string,
  ): Promise<Page> {
    return await this.pagesRepository.update(id, updatePageDto, tenantId);
  }

  async remove(id: string, tenantId: string): Promise<void> {
    return await this.pagesRepository.delete(id, tenantId);
  }
}
