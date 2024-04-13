import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaClient], // 实现接口的地方
  exports: [UserService],
})
export class UserModule {}
