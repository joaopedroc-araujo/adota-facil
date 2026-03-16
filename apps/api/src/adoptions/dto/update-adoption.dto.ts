import { PartialType } from '@nestjs/mapped-types';
import { CreateAdoptionDto } from './create-adoption.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { AdoptionStatus } from 'generated/prisma';

export class UpdateAdoptionDto extends PartialType(CreateAdoptionDto) {
  @IsEnum(AdoptionStatus)
  @IsOptional()
  status?: AdoptionStatus;
}
