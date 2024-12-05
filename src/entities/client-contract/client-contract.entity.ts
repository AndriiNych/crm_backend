import { FIELDS_TYPES } from '@src/db/fields-type';
import { TABLE_NAMES } from '@src/db/table-names';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.client_contract)
export class ClientContract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'client_id' })
  clientId: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'contract_id' })
  contractId: number;

  @Column({ ...FIELDS_TYPES.DATE, name: 'client_contract_date' })
  clientContractDate: Date;

  @Column({ ...FIELDS_TYPES.TEXT_ROW, name: 'client_contract_notes' })
  clientContractNotes: string;

  @Column({ ...FIELDS_TYPES.DATE, name: 'client_contract_start' })
  clientContractStart: Date;

  @Column({ ...FIELDS_TYPES.DATE, name: 'client_contract_end' })
  clientContractEnd: Date;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'client_contract_priority' })
  clientContractPriority: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'contract_status_id' })
  contractStatusId: number;

  @Column({ ...FIELDS_TYPES.BOOLEAN, name: 'is_deleted' })
  isDeleted: boolean;

  @Column({ ...FIELDS_TYPES.CREATED_AT })
  createdAt: Date;

  @Column({ ...FIELDS_TYPES.UPDATED_AT })
  updatedAt: Date;
}
