import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { HttpStatusCode } from 'src/enums/http-status-code.enum';
import { StatusMessages } from 'src/utils/status-message.function';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    let status = HttpStatusCode.INTERNAL_SERVER_ERROR;
    let message = StatusMessages[status];

    if (exception instanceof HttpException) {
      status = exception.getStatus() as HttpStatusCode;
      const res = exception.getResponse();
      message =
        typeof res === 'string'
          ? res
          : (res as any).message || StatusMessages[status] || res;
    } else if (exception.message) {
      message = exception.message;
    }

    this.logger.error(
      `[${request.method}] ${request.url} :: ${status} :: ${JSON.stringify(message)}`,
      exception instanceof Error ? exception.stack : '',
    );

    response.status(status).json({
      statusCode: status,
      message: message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
