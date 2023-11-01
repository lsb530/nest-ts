import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './core/filter/HttpExceptionFilter'
import { ValidationPipe } from '@nestjs/common'
import * as process from 'process'
import * as dotenv from 'dotenv'
import * as path from 'path'

const env = process.env.NODE_ENV
console.info('env: ', env)

let envFilePath = ''
switch (env) {
  case 'local':
    envFilePath = '.env.local'
    break
  case 'dev':
    envFilePath = '.env.dev'
    break
  case 'stage':
    envFilePath = '.env.stage'
    break
  case 'prod':
    envFilePath = '.env.prod'
    break
}

dotenv.config({ path: path.resolve(envFilePath) }) // 먼저 환경별 .env파일 로드
dotenv.config() // 기본 .env파일 로드

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3333)
}
bootstrap()
