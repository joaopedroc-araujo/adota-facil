import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTenantService } from './user-tenant.service';
import { CreateUserTenantDto } from './dto/create-user-tenant.dto';
import { UpdateUserTenantDto } from './dto/update-user-tenant.dto';

@Controller('user-tenant')
export class UserTenantController {
  constructor(private readonly userTenantService: UserTenantService) {}

  @Post()
  create(@Body() createUserTenantDto: CreateUserTenantDto) {
    return this.userTenantService.create(createUserTenantDto);
  }

  @Get()
  findAll() {
    return this.userTenantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTenantService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserTenantDto: UpdateUserTenantDto) {
    return this.userTenantService.update(+id, updateUserTenantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTenantService.remove(+id);
  }
}
