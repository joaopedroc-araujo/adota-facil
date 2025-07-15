import { IsString, IsUrl } from 'class-validator';

export class CreateMediaDto {
  @IsUrl()
  url: string;

  @IsString()
  type: string;
}
