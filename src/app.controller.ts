import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { ConfigService } from '@nestjs/config'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

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
}
