import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { Request } from 'express';

export interface JwtPayload {
  sub: string;
  email: string;
  tenantId: string;
  role: string;
  exp?: number;
  iat?: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
      passReqToCallback: true,
    });
  }

  /**
   * Este validate é chamado a cada requisição autenticada com JWT.
   * Pode adicionar validações extras aqui.
   */
  async validate(_req: Request, payload: JwtPayload) {
    const user = await this.authService.validateUserByJwt(payload);

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado ou inativo.');
    }

    return {
      userId: payload.sub,
      email: payload.email,
      role: payload.role,
      tenantId: payload.tenantId,
    };
  }
}
