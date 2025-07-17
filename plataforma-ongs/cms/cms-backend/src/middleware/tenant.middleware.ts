import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TenantsService } from 'src/tenants/tenants.service';

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(private readonly tenantsService: TenantsService) {}

  async use(req: Request, _res: Response, next: NextFunction) {
    const host: string = req.headers.host?.split(':')[0] || '';
    const parts = host.split('.');
    const subdomain = parts.length > 2 ? parts[0] : '';

    const skipDomains = ['localhost', '127.0.0.1', 'www', 'plataforma'];
    if (!subdomain || skipDomains.includes(subdomain)) {
      return next();
    }

    const tenant = await this.tenantsService.findBySubdomain(subdomain);
    if (!tenant) {
      throw new NotFoundException('Tenant not found');
    }

    (req as any).tenantId = tenant.id;
    (req as any).tenant = tenant;

    return next();
  }
}
