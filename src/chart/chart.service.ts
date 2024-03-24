import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ChartService {
  constructor(private readonly prisma: PrismaClient) {}
}
