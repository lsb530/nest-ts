import { DataSource, Repository } from 'typeorm'
import { User } from '../entity/user.entity'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager())
  }

  /* SQL 문으로 처리(token) */
  async findWithNativeQuery(firstName: string, lastName: string): Promise<any> {
    return await this.query(
      'SELECT * FROM public.user WHERE first_name = $1 OR last_name = $2',
      [firstName, lastName],
    )
  }

  /* query builder 기본 사용 */
  findActiveUsers(): Promise<User[]> {
    return this.createQueryBuilder('user')
      .where('user.is_active = :active', { active: true })
      .getMany()
  }

  /* 복잡한 쿼리 처리 */
  findComplicatedUsers(): Promise<User[]> {
    return this.createQueryBuilder('user')
      .leftJoinAndSelect('user.photos', 'photo')
      .where('user.active = :active', { active: true })
      .andWhere('user.age > :age', { age: 25 })
      .orderBy('user.name', 'ASC')
      .getMany()
  }
}
