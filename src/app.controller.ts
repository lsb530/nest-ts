import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { ConfigService } from '@nestjs/config'

@Controller()
export class AppController {
  private readonly null_check
  private readonly not_null_check
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService
  ) {
    // this.null_check = configService.getOrThrow('NULL_CHECK')
    // this.not_null_check = configService.getOrThrow('NOT_NULL_CHECK')
  }

  @Get()
  getHello(): any {
    const myName = process.env.MY_NAME
    console.info('myName', myName)
    const age = process.env.AGE
    console.info('age', age)
    const height = process.env.HEIGHT
    console.info('height', height)
  }

  @Get('env')
  envTest(): any {
    const myName = this.configService.get<string>('MY_NAME')
    console.info('myName', myName)
    const age = this.configService.get<string>('AGE')
    console.info('age', age)
    const height = this.configService.get<string>('HEIGHT')
    console.info('height', height)
  }

  @Get('db1')
  envDbTest1(): any {
    const dbHost = this.configService.get<string>('DATABASE_HOST')
    const dbUser = this.configService.get<string>('DATABASE_USER')
    const dbPort = this.configService.get<number>('DATABASE_PORT')

    console.info('dbHost', dbHost)
    console.info('dbUser', dbUser)
    console.info('dbPort', dbPort)
  }

  @Get('db2')
  envDbTest2(): any {
    // load파일에서 불러들인 변수들
    const dbHost = this.configService.get<string>('database.host')
    const dbUser = this.configService.get<string>('database.user')
    const dbPort = this.configService.get<string>('database.port')

    console.info('dbHost', dbHost)
    console.info('dbUser', dbUser)
    console.info('dbPort', dbPort)
  }

  @Get('db3')
  envDbTest3(): any {
    // load파일에서 불러들인 변수들을 인터페이스로 만들어서 사용
    const databaseConfig = this.configService.get<DbConfig>('database')
    console.info('databaseConfig', databaseConfig)

    // 대체변수
    const substitutedVar = this.configService.get<string>('database.test', 'handsome-boki')
    console.info('substitutedVar', substitutedVar)
  }

  @Get('db4')
  envTest2(): any {
    // get<number>는 숫자로 변환하지 않는다
    const n1 = this.configService.get<number>('INT_TEST1')
    console.info('n1', n1 + 100)
    const n2 = this.configService.get<number>('INT_TEST2')
    console.info('n2', n2 + 100)
    const n3 = this.configService.get<number>('INT_TEST3')
    console.info('n3', n3 + 100)
    const n4 = parseInt(this.configService.get<string>('INT_TEST4'))
    console.info('n4', n4 + 100)

    const t = n1 + 300
    console.info('t', t)
  }
}

interface DbConfig {
  host: string
  user: string
  port: number
}
