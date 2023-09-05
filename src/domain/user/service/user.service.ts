import { Injectable } from '@nestjs/common'
import { User } from '../entity/user.entity'
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto'
import { CustomException } from '../../../core/exception/CustomException'
import { ErrorCode } from '../../../core/exception/ErrorCode'
import { UserRepository } from '../repository/user.repository'

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async findAll(): Promise<User[]> {
    const rr = await this.userRepository.findWithNativeQuery('SeungBok', 'Kim')
    console.info('rr', rr)
    const activeUsers = await this.userRepository.findActiveUsers()
    console.info('activeUsers', activeUsers)
    return this.userRepository.find()
  }

  async findAllByPagination(
    page: number,
    limit: number,
  ): Promise<{ data: User[]; pageMeta: any }> {
    const data = await this.userRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    })
    const total = await this.userRepository.count()

    const pageMeta = {
      totalItems: total,
      itemCount: data.length,
      itemsPerPage: limit,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    }
    return { data, pageMeta }
  }

  async findOne(id: number): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ id })
    if (!user) {
      throw new CustomException(ErrorCode.USER_NOT_FOUND)
    }
    return user
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto)
    return this.userRepository.save(user)
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, updateUserDto)
    return this.findOne(id)
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id)
  }
}
