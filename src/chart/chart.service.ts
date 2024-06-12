import { Injectable, Req } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ChartData, CreateDto } from './chart.dto';

import { excelToCsv } from 'utils/excel';
import { Request } from 'express';

@Injectable()
export class ChartService {
  constructor(private readonly prisma: PrismaClient) {}

  async handleCreateChart(createDto: CreateDto, @Req() request: Request) {
    const { goal, chartData, chartType, name } = createDto;
    const csvData = await excelToCsv(chartData);
    const aiInput = `你是一个数据分析师，接下来我会给你我的分析目标和原始数据,请告诉我分析结论\n请使用${chartType}\n原始数据:\n${csvData}\n分析目标:${goal}\n`;
    // console.log(aiInput, 'aiInput===');
    this.handleInsertChartData({
      goal,
      chartData,
      chartType,
      name,
      genChart: aiInput,
      userId: request?.userId,
    });
    // return aiInput;
  }

  async handleInsertChartData(chartDataCnt: ChartData) {
    const { goal, name, genChart, chartData, chartType, userId } = chartDataCnt;
    try {
      console.log(userId);

      const insertRes = await this.prisma.chart.create({
        data: {
          goal,
          name,
          genChart,
          chartData,
          chartType,
          userId,
        },
      });
    } catch (e) {
      console.error(e, 'e===');

      return {
        code: 1,
        message: '图标生成失败',
      };
    }
  }
}
