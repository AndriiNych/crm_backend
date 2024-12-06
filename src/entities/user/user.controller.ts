import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TABLE_NAMES } from '@src/db/table-names';
import { UserDto } from './dto/user.dto';

@ApiTags(TABLE_NAMES.user)
@Controller(TABLE_NAMES.user)
export class UserController {
  constructor() {}

  @Post('/')
  async createUser(@Body() userDto: UserDto) {
    return 'Ok';
  }
}
