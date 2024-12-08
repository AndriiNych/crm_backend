import { FIELDS_TYPES } from '@src/db/fields-type';
import { TABLE_NAMES } from '@src/db/table-names';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.message)
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ ...FIELDS_TYPES.TEXT_ROW, name: 'message_code' })
  messageCode: string;

  @Column({ ...FIELDS_TYPES.TEXT_ROW, name: 'message_status' })
  messageStatus: string;

  @Column({ ...FIELDS_TYPES.TEXT_ROW, name: 'message_text' })
  messageText: string;
}
