import { IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateEventDto {
  @IsString()
  title: string;

  @IsDateString()
  date: string;

  @IsOptional()
  @IsString()
  description?: string;
}
