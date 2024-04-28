import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateDto } from './chart.dto';

import { Workbook } from 'exceljs';
import path from 'path';
import { excelToCsv } from 'utils/excel';

@Injectable()
export class ChartService {
  constructor(private readonly prisma: PrismaClient) {}

  async handleCreateChart(createDto: CreateDto) {
    const { goal, chartData, chartType, name } = createDto;
    const csvData = await excelToCsv(chartData);
    const aiInput = `你是一个数据分析师，接下来我会给你我的分析目标和原始数据,请告诉我分析结论\n分析目标:${goal}\n分析数据:${csvData}`;
    return aiInput;
  }
}
