import { UserTenant } from 'src/user-tenant/entities/user-tenant.entity';

import { IsString, IsEmail, IsOptional, IsDate } from 'class-validator';

export class User {
  @IsString()
  id: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  telefone?: string;

  @IsOptional()
  @IsString()
  fotoPerfil?: string;

  @IsString()
  status: string;

  @IsDate()
  createdAt: Date;

  @IsOptional()
  usersTenants?: UserTenant[];
}
