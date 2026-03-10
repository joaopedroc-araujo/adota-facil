import {
  Controller,
  Get,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  Body,
  Query,
} from '@nestjs/common';
import { FollowUpsService } from './follow-ups.service';
import { UpdateFollowUpDto } from './dto/update-follow-up.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('follow-ups')
@UseGuards(JwtAuthGuard)
export class FollowUpsController {
  constructor(private readonly followUpsService: FollowUpsService) {}

  @Get()
  findAll(@Req() req) {
    return this.followUpsService.findAllByTenant(req.tenantId);
  }

  @Get('pending')
  findPending(@Req() req, @Query('date') date?: string) {
    const targetDate = date ? new Date(date) : new Date();
    return this.followUpsService.findPendingByDate(targetDate, req.tenantId);
  }

  @Get('adoption/:adoptionId')
  findByAdoption(@Param('adoptionId') adoptionId: string, @Req() req) {
    return this.followUpsService.findByAdoption(adoptionId, req.tenantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req) {
    return this.followUpsService.findById(id, req.tenantId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFollowUpDto: UpdateFollowUpDto,
    @Req() req,
  ) {
    return this.followUpsService.update(id, updateFollowUpDto, req.tenantId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    return this.followUpsService.delete(id, req.tenantId);
  }
}
