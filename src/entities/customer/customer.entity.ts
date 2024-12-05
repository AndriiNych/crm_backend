import { FIELDS_TYPES } from '@src/db/fields-type';
import { TABLE_NAMES } from '@src/db/table-names';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.customer)
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'client_id' })
  clientId: number;

  @Column({ ...FIELDS_TYPES.NAME, name: 'customer_name' })
  customerName: string;

  @Column({ ...FIELDS_TYPES.PHONE, name: 'customer_phone' })
  customerPhone: string;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'customer_type_id' })
  customerTypeId: number;

  @Column({ ...FIELDS_TYPES.BOOLEAN, name: 'is_deleted' })
  isDeleted: boolean;

  @Column({ ...FIELDS_TYPES.CREATED_AT })
  createdId: Date;

  @Column({ ...FIELDS_TYPES.UPDATED_AT })
  updatedAt: Date;
}
