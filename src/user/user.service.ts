import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaClient) {}

  /**
   * 获取用户信息
   * @param userAccount 用户名
   * @returns
   */
  async findOne(userAccount: string) {
    return await this.prisma.user.findFirst({
      where: {
        userAccount: userAccount,
      },
    });
  }
}
