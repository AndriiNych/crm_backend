import { FIELDS_LENGTH, FIELDS_TYPES } from '@src/db/fields-type';
import { TABLE_NAMES } from '@src/db/table-names';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.call_billing)
export class CallBilling {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'client_id' })
  clientId: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'customer_id' })
  customerId: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'worker_id' })
  workerId: number;

  @Column({ ...FIELDS_TYPES.DATE, name: 'call_billing_date' })
  callBillingDate: Date;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'call_billing_length' })
  callBillingLength: number;

  @Column({ ...FIELDS_TYPES.CREATED_AT })
  createdIt: Date;
}
