import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../domain/user/entity/user.entity';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'boki',
  database: 'postgres',
  entities: ['dist/**/*.entity{.ts,.js}', User],
  synchronize: true,
  autoLoadEntities: true,
};

export default typeOrmConfig;
