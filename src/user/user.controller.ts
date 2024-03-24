import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './user.dto';
import { error } from 'console';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  async userLogin(@Body() loginDto: LoginDto, @Res() res) {
    error(loginDto, 'loginDto');
    const data = await this.userService.login(loginDto);

    return res.status(200).json({
      status: 'ok',
      data,
    });
  }

  //   @Post('/regitser')
  //   async userReg(@Body() registerDto: ResgiterDto) {}
}
