import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsUrl,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { AnimalStatus } from 'generated/prisma';

export class CreateAnimalDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsOptional()
  species?: string;

  @IsString()
  @IsOptional()
  breed?: string;

  @IsString()
  @IsOptional()
  age?: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsString()
  @IsOptional()
  healthNotes?: string;

  @IsEnum(AnimalStatus)
  @IsOptional()
  status?: AnimalStatus;

  @IsArray()
  @IsUrl({}, { each: true })
  @IsOptional()
  photos?: string[];
}
