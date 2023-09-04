import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BoardService } from '../service/board.service';
import { Board } from '../entity/board.entity';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  async create(@Body() body: any): Promise<Board> {
    return this.boardService.createBoard(body.title, body.desc);
  }

  @Get()
  async findAll(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any): Promise<Board> {
    return this.boardService.updateBoard(id, body.title, body.desc);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.boardService.deleteBoard(id);
  }
}
