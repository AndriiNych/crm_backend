import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TABLE_NAMES } from '@src/db/table-names';
import { ClientDto } from './dto/client.dto';
@ApiTags(TABLE_NAMES.client)
@Controller(TABLE_NAMES.client)
export class ClientController {
  constructor() {}

  @Get('/')
  async getClients() {
    return 'ok';
  }

  @Post('/')
  async createClient(@Body() clientDto: ClientDto) {
    return 'Ok';
  }
}
