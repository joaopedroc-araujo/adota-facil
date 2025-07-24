import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateMediaDto {
  @IsUrl()
  url: string;

  @IsString()
  @IsNotEmpty()
  type: string;
}
