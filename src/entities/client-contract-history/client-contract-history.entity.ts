import { FIELDS_TYPES } from '@src/db/fields-type';
import { TABLE_NAMES } from '@src/db/table-names';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.client_contract_history)
export class ClientContractHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'client_cntract_id' })
  clientContractId: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'contract_status_id' })
  contractStatusId: number;

  @Column({ ...FIELDS_TYPES.DATE, name: 'client_contract_date' })
  clientContractDate: Date;

  @Column({ ...FIELDS_TYPES.CREATED_AT })
  createdAt: Date;
}
