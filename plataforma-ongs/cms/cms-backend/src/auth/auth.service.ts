import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt.strategy';
import * as bcrypt from 'bcrypt';
import {
  IUserTenantRepository,
  UserTenantWithUserAndTenant,
} from 'src/interface/IUserTenantRepository.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject('IUserTenantRepository')
    private readonly userTenantRepository: IUserTenantRepository,
  ) {}

  /**
   * Valida as credenciais do usuário (login) obrigando pertinência ao tenant
   */
  async validateUser(email: string, password: string, tenantId: string) {
    const userTenant = await this.userTenantRepository.findByEmailAndTenant(
      email,
      tenantId,
    );

    if (!userTenant || !userTenant.user) return null;
    const passwordValid = await bcrypt.compare(
      password,
      userTenant.user.password,
    );

    if (!passwordValid) return null;

    return userTenant;
  }

  /**
   * Gera um JWT ao autenticar
   */
  async login(user: UserTenantWithUserAndTenant) {
    const payload: JwtPayload = {
      sub: user.user.id,
      email: user.user.email,
      tenantId: user.tenantId,
      role: user.role,
    };

    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: process.env.JWT_EXPIRATION || '1d',
        secret: process.env.JWT_SECRET,
      }),
      user: {
        id: user.user.id,
        email: user.user.email,
        tenantId: user.tenantId,
        role: user.role,
        nome: user.user.name,
      },
    };
  }

  /**
   * Usado pela JwtStrategy para validar o usuário do token em requests autenticadas
   */
  async validateUserByJwt(payload: JwtPayload) {
    // Busca novamente a relação user-tenant pelo id do usuário e tenantId
    const userTenant = await this.userTenantRepository.findByUserAndTenant(
      payload.sub,
      payload.tenantId,
    );

    if (!userTenant || !userTenant.user) return null;

    return {
      id: userTenant.user.id,
      email: userTenant.user.email,
      tenantId: userTenant.tenantId,
      role: userTenant.role,
      nome: userTenant.user.name,
    };
  }
}
