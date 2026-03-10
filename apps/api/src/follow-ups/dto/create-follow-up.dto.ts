import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreateFollowUpDto {
  @IsString()
  @IsNotEmpty()
  adoptionId: string;

  @IsDateString()
  @IsNotEmpty()
  scheduledDate: string;

  @IsString()
  @IsNotEmpty()
  label: string;

  @IsString()
  @IsOptional()
  notes?: string;
}
