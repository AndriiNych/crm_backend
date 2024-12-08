import { FIELDS_TYPES } from '@src/db/fields-type';
import { TABLE_NAMES } from '@src/db/table-names';
import { BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.contract_plan)
export class ContractPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'contract_id' })
  contractId: number;

  @Column({ ...FIELDS_TYPES.DATE, name: 'contract_start' })
  contractStart: Date;

  @Column({ ...FIELDS_TYPES.DATE, name: 'contract_end' })
  contractEnd: Date;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'contract_time' })
  contractTime: number;

  @Column({ ...FIELDS_TYPES.CREATED_AT })
  createdAt: Date;

  @Column({ ...FIELDS_TYPES.UPDATED_AT })
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}
