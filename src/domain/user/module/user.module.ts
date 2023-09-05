import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersService } from '../service/user.service'
import { User } from '../entity/user.entity'
import { UsersController } from '../controller/user.controller'
import { UserRepository } from '../repository/user.repository'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
})
export class UserModule {}
