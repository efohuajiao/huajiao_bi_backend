import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private readonly prisma: PrismaClient,
  ) {}

  /**
   * 登录逻辑
   * @param userAccount 用户名
   * @param pwd 密码
   * @returns token
   */
  async signIn(userAccount: string, userPwd: string) {
    console.error(userAccount, userPwd);
    const user = await this.findOne(userAccount);

    if (user.userPassword != userPwd) {
      return { code: 1, msg: '密码错误' }; // 密码不正确，抛出未授权错误
    }
    const payload = { ...user, id: user.id.toString() }; // 创建声明数据
    const access_token = await this.jwtService.signAsync(payload);
    console.error(access_token);

    return {
      code: 0,
      access_token,
    };
  }

  async register(userAccount: string, pwd: string, confirmPwd: string) {
    const user = await this.findOne(userAccount);
    if (user) return '该用户已注册';
    // this.prisma.user.create({
    //   data: {
    //     userAccount,
    //     userPassword: pwd,
    //     userRole: '1',
    //   },
    // });
  }

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
