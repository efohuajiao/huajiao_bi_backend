import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ChartModule } from './chart/chart.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [UserModule, ChartModule, AuthModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard, // 将认证守卫注册成全局守卫
    },
  ],
})
export class AppModule {}
