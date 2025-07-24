import {
  Controller,
  Post,
  Body,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }, @Req() req) {
    const tenantId = req.tenantId;
    if (!tenantId) throw new UnauthorizedException('Tenant não identificado');

    const userTenant = await this.authService.validateUser(
      body.email,
      body.password,
      tenantId,
    );

    if (!userTenant) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    return this.authService.login(userTenant);
  }
}
