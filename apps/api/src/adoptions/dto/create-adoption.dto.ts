import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreateAdoptionDto {
  @IsString()
  @IsNotEmpty()
  animalId: string;

  @IsString()
  @IsNotEmpty()
  adopterId: string;

  @IsString()
  @IsOptional()
  notes?: string;

  @IsDateString()
  @IsOptional()
  adoptionDate?: string;
}
