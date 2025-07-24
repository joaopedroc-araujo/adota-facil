import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsUrl,
  IsOptional,
} from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsUrl({}, { each: true })
  @IsOptional()
  photos?: string[];
}
