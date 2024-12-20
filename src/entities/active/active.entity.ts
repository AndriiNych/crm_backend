import { TABLE_NAMES } from '@src/db/table-names';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity(TABLE_NAMES.active)
export class Active {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'record',
    type: 'varchar',
    length: 10,
    nullable: true,
    default: '',
  })
  record: string;
}
