import { IsString } from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  foto: string;
}
