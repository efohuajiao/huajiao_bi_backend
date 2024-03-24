import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ChartService } from './chart.service';
import { CreateDto, EditDto } from './chart.dto';

@Controller('chart')
export class ChartControler {
  constructor(private readonly chartService: ChartService) {}

  @Post('/create')
  async createChart(@Body() createDto: CreateDto) {}

  @Post('/edit')
  async editChart(@Body() editDto: EditDto) {}

  @Get()
  async getChart(@Query('goal') goal, @Query('chartType') chartType) {
    return '1111';
  }
}
