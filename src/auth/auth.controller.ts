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

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Public() // 使用自定义的装饰器将其变成公共接口
  @Post('/login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(
      signInDto.params.userAccount,
      signInDto.params.userPassword,
    );
  }

  @Post('/register')
  register(@Body() registerDto) {
    return this.authService.register();
  }

  @Get('/profile')
  getProfile(@Request() request) {
    return request.user;
  }
}
