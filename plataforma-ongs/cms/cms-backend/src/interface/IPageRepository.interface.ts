import { Page } from 'generated/prisma';
import { CreatePageDto } from 'src/pages/dto/create-page.dto';
import { UpdatePageDto } from 'src/pages/dto/update-page.dto';

export interface IPageRepository {
  create(data: CreatePageDto, tenantId: string): Promise<Page>;
  findAllByTenant(tenantId: string): Promise<Page[]>;
  findById(id: string, tenantId: string): Promise<Page | null>;
  findBySlug(slug: string, tenantId: string): Promise<Page | null>;
  update(id: string, data: UpdatePageDto, tenantId: string): Promise<Page>;
  delete(id: string, tenantId: string): Promise<void>;
}
