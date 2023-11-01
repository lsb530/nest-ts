import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import databaseConfig from './databaseConfig'

function getEnvFilePath() {
  switch (process.env.NODE_ENV) {
    case 'local':
      return '.env.local'
    case 'dev':
      return '.env.dev'
    default:
      return '.env'
  }
}

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: [getEnvFilePath(), '.env'],
      load: [databaseConfig],
    }),
  ],
})
export class ConfigurationModule {}
