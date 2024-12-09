import { DataSource, EntityManager } from 'typeorm';
import { ClientService } from './client.service';
import { ClientDto } from './dto/client.dto';
import { ClientResponseDto } from './dto/client.response.dto';
import { Injectable } from '@nestjs/common';
import { ClientParamDto } from './dto/client.param.dto';
import { ClientUpdateDto } from './dto/client.update.dto';

@Injectable()
export class ClientTransaction {
  constructor(
    private readonly dataSource: DataSource,
    private readonly clientService: ClientService,
  ) {}

  public async getAllRecords(): Promise<ClientResponseDto[]> {
    const result = await this.dataSource.transaction(async manager => {
      return await this.clientService.getAllRecords(manager);
    });
    return result;
  }

  public async getRecordById(param: ClientParamDto): Promise<ClientResponseDto> {
    const { id } = param;
    const result = await this.dataSource.transaction(async manager => {
      return await this.clientService.getRecordById(manager, id);
    });
    return result;
  }

  public async createRecord(body: ClientDto): Promise<ClientResponseDto> {
    const result = await this.dataSource.transaction(async manager => {
      return await this.clientService.createRecord(manager, body);
    });
    return result;
  }

  public async updateRecordById(
    param: ClientParamDto,
    body: ClientUpdateDto,
  ): Promise<ClientResponseDto> {
    const { id } = param;
    const updatedRecord = await this.dataSource.transaction(async manager => {
      return await this.clientService.updateRecordById(manager, id, body);
    });
    return updatedRecord;
  }

  public async deleteRecordById(param: ClientParamDto): Promise<ClientResponseDto> {
    const { id } = param;
    const deletedRecord = await this.dataSource.transaction(async manager => {
      return await this.clientService.deleteRecordById(manager, id);
    });
    return deletedRecord;
  }
}
