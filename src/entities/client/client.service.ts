import { EntityManager } from 'typeorm';
import { ClientResponseDto } from './dto/client.response.dto';
import { Client } from './client.entity';
import { ClientDto } from './dto/client.dto';
import { ConflictException, Injectable, NotFoundException, Param } from '@nestjs/common';
import { ClientUpdateDto } from './dto/client.update.dto';

const ENTITY_CLASS = Client;
@Injectable()
export class ClientService {
  constructor() {}

  public async getAllRecords(manager: EntityManager): Promise<ClientResponseDto[]> {
    const result = await manager.find(ENTITY_CLASS);
    return result;
  }

  public async getRecordById(manager: EntityManager, id: number): Promise<ClientResponseDto> {
    return await this.fetchRecordByIdWithValidation(manager, id);
  }

  public async createRecord(manager: EntityManager, body: ClientDto): Promise<ClientResponseDto> {
    const result = await manager.save(ENTITY_CLASS, body);
    return result;
  }

  public async updateRecordById(
    manager: EntityManager,
    id: number,
    body: ClientUpdateDto,
  ): Promise<ClientResponseDto> {
    const fetchRecord = await this.fetchRecordByIdWithValidation(manager, id);

    const newRecord = manager.merge(ENTITY_CLASS, fetchRecord, body);

    return await manager.save(ENTITY_CLASS, newRecord);
  }

  // private async createR () {
  //   const contractors = await manager
  //     .createQueryBuilder(Contractor, 'contractor')
  //     .where('contractor.name LIKE :name', { name: searchString }) // Пошук за назвою
  //     .andWhere('contractor.createdAt > :date', { date: '2022-12-12' }) // Фільтр за датою створення
  //     .orderBy('contractor.name', 'ASC') // Сортування за назвою
  //     .addOrderBy('contractor.createdAt', 'DESC') // Сортування за датою створення
  //     .skip((page - 1) * pageSize) // Пропустити записи для попередніх сторінок
  //     .take(pageSize) // Обмежити кількість записів
  //     .getMany(); // Отримати масив записів

  // }

  private async isExistRecord(manager: EntityManager, id: number): Promise<void> {
    const fetchRecord = await this.fetchRecordById(manager, id);

    if (fetchRecord) {
      throw new ConflictException(`Client with id: ${id} already exists.`);
    }
  }

  private async fetchRecordByIdWithValidation(
    manager: EntityManager,
    id: number,
  ): Promise<ClientResponseDto> {
    const fetchRecord = await this.fetchRecordById(manager, id);

    if (!fetchRecord) {
      throw new NotFoundException(`Client with id: ${id} does not exist.`);
    }

    return fetchRecord;
  }

  private async fetchRecordById(manager: EntityManager, id: number): Promise<ClientResponseDto> {
    return await manager.findOneBy(ENTITY_CLASS, { id });
  }
}
