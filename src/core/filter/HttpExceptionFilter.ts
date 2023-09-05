import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common'
import { Request, Response } from 'express'
import { CustomException } from '../exception/CustomException'

@Catch(CustomException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: CustomException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()

    response.status(status).json({
      title: exception.errorCode.title,
      status: exception.errorCode.status,
      message: exception.errorCode.message,
      path: request.url,
      method: request.method,
      timestamp: new Date().toISOString(),
    })
  }
}
