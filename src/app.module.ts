import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ChartModule } from './chart/chart.module';

@Module({
  imports: [UserModule, ChartModule],
})
export class AppModule {}
