import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from '../entity/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async createBoard(title: string, desc: string): Promise<Board> {
    const board = new Board();
    board.title = title;
    board.desc = desc;
    return await this.boardRepository.save(board);
  }

  async getAllBoards(): Promise<Board[]> {
    return await this.boardRepository.find();
  }

  async getBoardById(id: string): Promise<Board | null> {
    return await this.boardRepository.findOneBy({ id });
  }

  async updateBoard(id: string, title: string, desc: string): Promise<Board> {
    const board = await this.boardRepository.findOneBy({ id });
    board.title = title;
    board.desc = desc;
    return await this.boardRepository.save(board);
  }

  async deleteBoard(id: string): Promise<void> {
    await this.boardRepository.delete(id);
  }
}
