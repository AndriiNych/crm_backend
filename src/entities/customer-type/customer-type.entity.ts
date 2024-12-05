import { FIELDS_TYPES } from '@src/db/fields-type';
import { TABLE_NAMES, TABLES_LINKS } from '@src/db/table-names';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.customer_type)
export class CustomerType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ ...FIELDS_TYPES.NAME, name: 'customer_type_name' })
  customerTypeName: string;

  @Column({ ...FIELDS_TYPES.TEXT_ROW, name: 'customer_type_notes' })
  customerTypeNotes: string;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'customer_type_priority' })
  customerTypePriority: number;

  @Column({ ...FIELDS_TYPES.BOOLEAN, name: 'is_deleted' })
  isDeleted: boolean;

  @Column({ ...FIELDS_TYPES.CREATED_AT })
  createdAt: Date;
}
