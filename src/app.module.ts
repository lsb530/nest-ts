import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from '../TypeOrmConfig';
import { DataSource } from 'typeorm';
import { BoardController } from './board/controller/board.controller';
import { BoardService } from './board/service/board.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController, BoardController],
  providers: [AppService, BoardService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
