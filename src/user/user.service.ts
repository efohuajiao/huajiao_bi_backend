import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { LoginDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaClient) {}

  async login(loginDto: LoginDto) {
    const res = await this.prisma.user.findFirst({
      where: {
        userAccount: loginDto.userAccount,
      },
    });
    if (!res) {
      return '账号未注册，请注册账号';
    }
    if (res.userPassword !== loginDto.userPassword) {
      return '登陆失败!';
    }
    return '登陆成功';
  }
}
