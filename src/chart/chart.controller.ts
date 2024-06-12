import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { ChartService } from './chart.service';
import { CreateDto, EditDto } from './chart.dto';
import { Public } from 'src/skipAuth';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@Controller('chart')
@ApiTags('图表')
@Public()
export class ChartControler {
  constructor(private readonly chartService: ChartService) {}

  @Post('/create')
  async createChart(@Body() createDto: CreateDto, @Req() request: Request) {
    return this.chartService.handleCreateChart(createDto, request);
  }

  @Post('/edit')
  async editChart(@Body() editDto: EditDto) {}
}
