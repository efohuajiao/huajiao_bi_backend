import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ChartService } from './chart.service';
import { CreateDto, EditDto } from './chart.dto';
import { Public } from 'src/skipAuth';
import * as path from 'path';
import { ApiTags } from '@nestjs/swagger';

@Controller('chart')
@ApiTags('图表')
@Public()
export class ChartControler {
  constructor(private readonly chartService: ChartService) {}

  @Post('/create')
  async createChart(@Body() createDto: CreateDto) {
    return this.chartService.handleCreateChart(createDto);
  }

  @Post('/edit')
  async editChart(@Body() editDto: EditDto) {}
}
