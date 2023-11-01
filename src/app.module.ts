import { Module, ValidationPipe } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'
import { UserModule } from './domain/user/module/user.module'
import typeOrmConfig from './config/TypeOrmConfig'
import { APP_PIPE } from '@nestjs/core'
import { ConfigurationModule } from './config/config.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    ConfigurationModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
