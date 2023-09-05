import { HttpException } from '@nestjs/common'
import { ErrorCode } from './ErrorCode'

export class CustomException extends HttpException {
  public errorCode: (typeof ErrorCode)[keyof typeof ErrorCode]
  constructor(errorCode: (typeof ErrorCode)[keyof typeof ErrorCode]) {
    super(
      {
        title: errorCode,
        status: errorCode.status,
        message: errorCode.message,
      },
      errorCode.status,
    )
    this.errorCode = errorCode
  }
}
