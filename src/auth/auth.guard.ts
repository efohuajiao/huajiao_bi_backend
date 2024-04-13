import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConstants } from './constant';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from 'src/skipAuth';

// 守卫，在获取需要认证信息前进行用户信息判定
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  /**
   * 验证token有效性
   * @param context
   * @returns
   */
  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    // 如果该接口是公共的，返回true
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) throw new UnauthorizedException();
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secert,
      });
      // 将payload挂载到请求中，其他路由可以获取
      request['user'] = payload;
    } catch (e) {
      throw new UnauthorizedException();
    }
    return true;
  }

  /**
   * 获取token
   * @param request 请求
   * @returns
   */
  private extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type ? token : '';
  }
}
