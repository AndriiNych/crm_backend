import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TABLE_NAMES } from '@src/db/table-names';
import { ClientTransaction } from './client.transaction';
import { ClientDto } from './dto/client.dto';
import { ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { ClientResponseDto } from './dto/client.response.dto';
import { ClientParamDto } from './dto/client.param.dto';
import { ClientUpdateDto } from './dto/client.update.dto';

@Controller(TABLE_NAMES.client)
export class ClientController {
  constructor(private readonly clientTransaction: ClientTransaction) {}

  @Get('/')
  @ApiOkResponse({
    description: 'Clients list',
    type: ClientResponseDto,
    isArray: true,
  })
  async getAllRecords(@Query() query: any) {
    console.log(query);
    return await this.clientTransaction.getAllRecords();
  }

  @Get('/id/:id')
  async getRecordById(@Param() param: ClientParamDto) {
    return await this.clientTransaction.getRecordById(param);
  }

  @Post('/')
  @ApiResponse({
    status: 201,
    description: 'Saved client',
    type: ClientResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    example: {
      message: [
        'clientPhone must be longer than or equal to 12 characters',
        'Phone must be a decimal number',
      ],
      error: 'Bad Request',
      statusCode: 400,
    },
  })
  async createRecord(@Body() body: ClientDto) {
    return await this.clientTransaction.createRecord(body);
  }

  @Put('/id/:id')
  async updateRecord(@Param() param: ClientParamDto, @Body() body: ClientUpdateDto) {
    return await this.clientTransaction.updateRecordById(param, body);
  }
}
