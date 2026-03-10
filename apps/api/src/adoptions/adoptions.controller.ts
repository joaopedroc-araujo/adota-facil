import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AdoptionsService } from './adoptions.service';
import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('adoptions')
@UseGuards(JwtAuthGuard)
export class AdoptionsController {
  constructor(private readonly adoptionsService: AdoptionsService) {}

  @Post()
  create(@Body() createAdoptionDto: CreateAdoptionDto, @Req() req) {
    return this.adoptionsService.create(createAdoptionDto, req.tenantId);
  }

  @Get()
  findAll(@Req() req) {
    return this.adoptionsService.findAllByTenant(req.tenantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req) {
    return this.adoptionsService.findById(id, req.tenantId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdoptionDto: UpdateAdoptionDto,
    @Req() req,
  ) {
    return this.adoptionsService.update(id, updateAdoptionDto, req.tenantId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    return this.adoptionsService.delete(id, req.tenantId);
  }
}
