import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { EntityManager } from 'typeorm';
import { ClassLink } from '../entities/class-links';

@Injectable()
export class EntityService {
  constructor() {}

  public async getAllRecords<T, C, B>(
    manager: EntityManager,
    controller: ClassLink<T, C, B>,
  ): Promise<B[]> {
    const result = plainToInstance(controller.baseDto, await manager.find(controller.entity));
    return result;
  }

  public async createRecord<T, C, B>(
    manager: EntityManager,
    controller: ClassLink<T, C, B>,
  ): Promise<B> {
    const inputRecord = manager.create(controller.createDto);
    const result = await manager.save(controller.entity);
    return plainToInstance(controller.baseDto, result);
  }
}
