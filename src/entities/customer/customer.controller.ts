import { Controller, Get } from '@nestjs/common';
import { TABLE_NAMES } from '@src/db/table-names';
import { EntityService } from '@src/services/providers/entity.service';
import { DataSource } from 'typeorm';
import { CLASS_LINKS } from '@src/services/entities/class-links';

const CONTROLLER = CLASS_LINKS[TABLE_NAMES.customer];
@Controller(CONTROLLER.controllerName)
export class CustomerController {
  constructor(
    private readonly dataSource: DataSource,
    private readonly entityService: EntityService,
  ) {}

  @Get('/')
  async getAllRecords() {
    const result = await this.dataSource.transaction(async manager => {
      const fetchResult = this.entityService.getAllRecords(manager, CONTROLLER);
      return fetchResult;
    });
    return result;
  }
}
