import { FIELDS_TYPES } from '@src/db/fields-type';
import { TABLE_NAMES } from '@src/db/table-names';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.client_contract_plan)
export class ClientContractPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'client_id' })
  clientId: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'client_contract_id' })
  clientContractId: number;

  @Column({ ...FIELDS_TYPES.DATE, name: 'client_contract_plan_sttart' })
  clientContractPlanStart: Date;

  @Column({ ...FIELDS_TYPES.DATE, name: 'client_contract_plan_end' })
  clientContractPlanEnd: Date;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'client_contract_plan_length' })
  clientContractPlanLength: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'client_contract_plan_balans' })
  clientContractPlanBalans: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'client_contract_plan_priority' })
  clientContractPlanPriority: number;

  @Column({ ...FIELDS_TYPES.BOOLEAN, name: 'is_active' })
  isActive: boolean;

  @Column({ ...FIELDS_TYPES.CREATED_AT })
  createdAd: Date;
}
