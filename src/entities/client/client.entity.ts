import { FIELDS_TYPES } from '@src/db/fields-type';
import { TABLE_NAMES } from '@src/db/table-names';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.client)
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'client_parent_id' })
  clientParentId: number;

  @Column({ ...FIELDS_TYPES.NAME, name: 'client_name' })
  clientName: string;

  @Column({ ...FIELDS_TYPES.TEXT_ROW, name: 'client_notes' })
  clientNotes: string;

  @Column({ ...FIELDS_TYPES.PHONE, name: 'client_phone' })
  clientPhone: string;

  @Column({ ...FIELDS_TYPES.TEXT_ROW, name: 'client_adress' })
  clientAdress: string;

  @Column({ ...FIELDS_TYPES.EMAIL, name: 'client_email' })
  clientEmail: string;

  @Column({ ...FIELDS_TYPES.BOOLEAN, name: 'is_deleted' })
  isDeleted: boolean;

  @Column({ ...FIELDS_TYPES.CREATED_AT })
  createdAt: Date;

  @Column({ ...FIELDS_TYPES.UPDATED_AT })
  updatedAt: Date;
}
