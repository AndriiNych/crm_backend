import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('active')
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
