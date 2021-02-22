import { Model, Table, Column, BelongsTo } from 'sequelize-typescript';
import { ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GroupEntity } from './Group.entity';

@Table
export class IndexEntity extends Model<IndexEntity> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column
  name: string;

  @Column
  ethPriceInWei: number;

  @Column
  usdPriceInCents: number;

  @Column
  usdCapitalization: number;

  @Column
  percentageChange: number;

  @ManyToOne(() => GroupEntity, (group) => group.indexes)
  group: GroupEntity;
}
