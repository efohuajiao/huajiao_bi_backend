import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  /**
   * 登录逻辑
   * @param userAccount 用户名
   * @param pwd 密码
   * @returns token
   */
  async signIn(userAccount: string, pwd: string) {
    const user = await this.userService.findOne(userAccount);

    if (user.userPassword != pwd) {
      throw new UnauthorizedException(); // 密码不正确，抛出未授权错误
    }
    const payload = { ...user, id: user.id.toString() }; // 创建声明数据
    const access_token = await this.jwtService.signAsync(payload);

    return {
      access_token,
    };
  }

  async register(userAccount: string, pwd: string, accessPwd: string) {
    const user = await this.userService.findOne(userAccount);
    if (user) return '该用户已注册';
  }
}
