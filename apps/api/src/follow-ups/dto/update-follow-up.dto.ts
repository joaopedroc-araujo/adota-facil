import { PartialType } from '@nestjs/mapped-types';
import { CreateFollowUpDto } from './create-follow-up.dto';
import { IsEnum, IsOptional, IsDateString } from 'class-validator';
import { FollowUpStatus } from 'generated/prisma';

export class UpdateFollowUpDto extends PartialType(CreateFollowUpDto) {
  @IsEnum(FollowUpStatus)
  @IsOptional()
  status?: FollowUpStatus;

  @IsDateString()
  @IsOptional()
  completedDate?: string;
}
