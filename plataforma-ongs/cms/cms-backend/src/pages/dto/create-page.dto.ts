import { IsString } from 'class-validator';

export class CreatePageDto {
  @IsString()
  slug: string;

  @IsString()
  content: string;
}
