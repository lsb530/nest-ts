import { IsNotEmpty, IsString } from 'class-validator'

export class CreateUserDto {
  @IsString()
  firstName: string
  @IsString()
  lastName: string
  isActive?: boolean
}

export class UpdateUserDto {
  firstName?: string
  lastName?: string
  isActive?: boolean
}

export class FindUserParam {
  @IsNotEmpty()
  firstName: string
  @IsNotEmpty()
  lastName: string
}
