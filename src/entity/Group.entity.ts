import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IndexEntity } from './Index.entity';

@Entity()
export class GroupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;ß
  @Column()
  index_id: number;

  @OneToMany(() => IndexEntity, (index) => index.group)
  indexes: IndexEntity[];
}
