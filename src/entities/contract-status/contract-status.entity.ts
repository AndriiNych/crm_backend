import { FIELDS_TYPES } from '@src/db/fields-type';
import { TABLE_NAMES } from '@src/db/table-names';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.contract_status)
export class ContractStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ ...FIELDS_TYPES.TEXT_ROW, name: 'contract_status_name' })
  contractStatusName: string;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'sort' })
  sort: number;

  @Column({ ...FIELDS_TYPES.BOOLEAN, name: 'is_deleted' })
  isDeleted: boolean;

  @Column({ ...FIELDS_TYPES.CREATED_AT })
  createdAt: Date;
}
