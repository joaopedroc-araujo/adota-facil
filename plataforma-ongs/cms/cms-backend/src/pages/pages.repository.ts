import { Injectable } from '@nestjs/common';
import { Page } from 'generated/prisma';
import { IPageRepository } from 'src/interface/IPageRepository.interface';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';

@Injectable()
export class PagesRepository implements IPageRepository {
  create(data: CreatePageDto, tenantId: string): Promise<Page> {
    throw new Error('Method not implemented.');
  }
  findAllByTenant(tenantId: string): Promise<Page[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string, tenantId: string): Promise<Page | null> {
    throw new Error('Method not implemented.');
  }
  findBySlug(slug: string, tenantId: string): Promise<Page | null> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: UpdatePageDto, tenantId: string): Promise<Page> {
    throw new Error('Method not implemented.');
  }
  delete(id: string, tenantId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
