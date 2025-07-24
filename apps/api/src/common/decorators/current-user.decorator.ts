import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from 'src/types/jwt-payload.type';

export const CurrentUser = createParamDecorator<JwtPayload, ExecutionContext>(
  (_data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
