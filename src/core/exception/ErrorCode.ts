import { HttpStatus } from '@nestjs/common'

export const ErrorCode = {
  // Common
  INVALID_UUID: {
    title: 'INVALID_UUID',
    status: HttpStatus.BAD_REQUEST,
    message: '유효하지 않은 UUID 값 요청입니다',
  },
  INVALID_FIELDS: {
    title: 'INVALID_FIELDS',
    status: HttpStatus.BAD_REQUEST,
    message: '유효하지 않은 데이터 요청입니다',
  },

  // File
  FILE_NOT_FOUND: {
    title: 'FILE_NOT_FOUND',
    status: HttpStatus.NOT_FOUND,
    message: '해당 파일이 존재하지 않습니다',
  },
  INVALID_FILE_FORMAT: {
    title: 'INVALID_FILE_FORMAT',
    status: HttpStatus.BAD_REQUEST,
    message: '알맞은 파일 형식이 아닙니다',
  },

  // SupaBase - gotrue
  UN_AUTHORIZED: {
    title: 'UN_AUTHORIZED',
    status: HttpStatus.UNAUTHORIZED,
    message: '로그인이 필요합니다',
  },
  USER_NOT_FOUND: {
    title: 'USER_NOT_FOUND',
    status: HttpStatus.NOT_FOUND,
    message: '해당 유저가 존재하지 않습니다',
  },
  EXPIRED_TOKEN: {
    title: 'EXPIRED TOKEN',
    status: HttpStatus.UNAUTHORIZED,
    message: '유효시간이 만료된 토큰입니다',
  },
  INVALID_ACCESS: {
    title: 'INVALID_ACCESS',
    status: HttpStatus.FORBIDDEN,
    message: '접근권한이 없습니다',
  },
  SUPABASE_ERROR: {
    title: 'SUPABASE_ERROR',
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    message: 'Supabase Error',
  },
} as const
