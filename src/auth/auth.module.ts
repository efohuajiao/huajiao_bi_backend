import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [AuthService, PrismaClient],
  controllers: [AuthController],
  imports: [
    UserModule,
    // 将JwtModule注册成全局Module
    JwtModule.register({
      global: true,
      secret: jwtConstants.secert,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
