import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TenantFeatureService } from './tenant-feature.service';
import { CreateTenantFeatureDto } from './dto/create-tenant-feature.dto';
import { UpdateTenantFeatureDto } from './dto/update-tenant-feature.dto';

@Controller('tenant-feature')
export class TenantFeatureController {
  constructor(private readonly tenantFeatureService: TenantFeatureService) {}

  @Post()
  create(@Body() createTenantFeatureDto: CreateTenantFeatureDto) {
    return this.tenantFeatureService.create(createTenantFeatureDto);
  }

  @Get()
  findAll() {
    return this.tenantFeatureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tenantFeatureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTenantFeatureDto: UpdateTenantFeatureDto) {
    return this.tenantFeatureService.update(+id, updateTenantFeatureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tenantFeatureService.remove(+id);
  }
}
