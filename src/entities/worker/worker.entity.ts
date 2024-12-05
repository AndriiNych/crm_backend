import { FIELDS_TYPES } from '@src/db/fields-type';
import { TABLE_NAMES } from '@src/db/table-names';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.worker)
export class Worker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ ...FIELDS_TYPES.NAME, name: 'worker_name' })
  workerName: string;

  @Column({ ...FIELDS_TYPES.TEXT_ROW, name: 'worker_ip4' })
  workerIp4: string;

  @Column({ ...FIELDS_TYPES.PHONE, name: 'worker_phone' })
  workerPhone: string;

  @Column({ ...FIELDS_TYPES.EMAIL, name: 'worker_email' })
  workerEmail: string;

  @Column({ ...FIELDS_TYPES.BOOLEAN, name: 'is_deleted' })
  isDeleted: boolean;

  @Column({ ...FIELDS_TYPES.CREATED_AT })
  createdAt: Date;

  @Column({ ...FIELDS_TYPES.UPDATED_AT })
  updatedAt: Date;
}
