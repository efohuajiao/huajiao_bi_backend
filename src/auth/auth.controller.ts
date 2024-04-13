import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { Public } from 'src/skipAuth';
import { SignInDto, ResgiterDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Public() // 使用自定义的装饰器将其变成公共接口
  @Post('/login')
  signIn(@Body() signInDto: SignInDto) {
    const { userAccount, userPwd } = signInDto;
    return this.authService.signIn(userAccount, userPwd);
  }

  @Post('/register')
  register(@Body() registerDto: ResgiterDto) {
    const { userAccount, userPwd, confirmPwd } = registerDto;
    return this.authService.register(userAccount, userPwd, confirmPwd);
  }

  @Get('/profile')
  getProfile(@Request() req) {
    return {
      code: 0,
      msg: '获取成功',
      data: req.user,
    };
  }
}
