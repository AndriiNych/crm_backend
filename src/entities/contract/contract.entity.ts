import { FIELDS_TYPES } from '@src/db/fields-type';
import { TABLE_NAMES } from '@src/db/table-names';
import { BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.contract)
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ ...FIELDS_TYPES.NAME, name: 'contract_name' })
  contractName: string;

  @Column({ ...FIELDS_TYPES.TEXT_ROW, name: 'contract_notes' })
  contractNotes: string;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'contract_type_id' })
  contractTypeId: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'contract_length' })
  contractLength: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'contract_time' })
  contractTime: number;

  @Column({ ...FIELDS_TYPES.DECIMAL, name: 'contract_amount' })
  contractAmount: number;

  @Column({ ...FIELDS_TYPES.BOOLEAN, name: 'is_deleted' })
  isDeleted: boolean;

  @Column({ ...FIELDS_TYPES.CREATED_AT })
  createdAt: Date;

  @Column({ ...FIELDS_TYPES.UPDATED_AT })
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}
