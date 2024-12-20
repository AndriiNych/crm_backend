import { Controller, Get, HttpCode } from '@nestjs/common';

import { ActiveService } from './active.service';
import { TABLE_NAMES } from '@src/db/table-names';

@Controller(TABLE_NAMES.active)
export class ActiveController {
  constructor(private readonly activeService: ActiveService) {}

  @Get('/')
  async getAllActive() {
    const actives = await this.activeService.getAllActive();
    return { status: 'ok', data: actives };
  }
}
