import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const myName = process.env.MY_NAME
    console.info('myName', myName)
    const age = process.env.AGE
    console.info('age', age)
    const height = process.env.HEIGHT
    console.info('height', height)

    return this.appService.getHello()
  }
}
