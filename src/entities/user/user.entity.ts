import { FIELDS_TYPES } from '@src/db/fields-type';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ ...FIELDS_TYPES.TEXT_ROW, name: 'user_table_link' })
  userTableLink: string;

  @Column({ ...FIELDS_TYPES.NUMBER, name: 'user_table_link_id' })
  userTableLinkId: number;

  @Column({ ...FIELDS_TYPES.TEXT_ROW, name: 'user_login' })
  userLogin: string;

  @Column({ ...FIELDS_TYPES.TEXT_ROW, name: 'user_password' })
  userPassword: string;

  @Column({ ...FIELDS_TYPES.TEXT_ROW, name: 'user_password_solt' })
  userPasswordSolt: string;

  @Column({ ...FIELDS_TYPES.TEXT_ROW, name: 'user_jwt' })
  userJwt: string;

  @Column({ ...FIELDS_TYPES.TEXT_ROW, name: 'user_nickname' })
  userNickname: string;

  @Column({ ...FIELDS_TYPES.BOOLEAN, name: 'is_deleted' })
  isDeleted: boolean;

  @Column({ ...FIELDS_TYPES.CREATED_AT })
  createdAt: Date;
}
