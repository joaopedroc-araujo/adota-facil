import { HttpStatusCode } from 'src/enums/http-status-code.enum';

export const StatusMessages: { [key in HttpStatusCode]?: string } = {
  [HttpStatusCode.BAD_REQUEST]: 'Requisição inválida',
  [HttpStatusCode.UNAUTHORIZED]: 'Não autorizado',
  [HttpStatusCode.FORBIDDEN]: 'Acesso proibido',
  [HttpStatusCode.NOT_FOUND]: 'Recurso não encontrado',
  [HttpStatusCode.INTERNAL_SERVER_ERROR]: 'Erro interno do servidor',
};
