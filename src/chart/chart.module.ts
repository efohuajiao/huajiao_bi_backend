import { Module } from '@nestjs/common';
import { ChartControler } from './chart.controller';
import { ChartService } from './chart.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ChartControler],
  providers: [ChartService, PrismaClient],
})
export class ChartModule {}
