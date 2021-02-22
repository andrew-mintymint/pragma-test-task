import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GroupEntity } from './Group.entity';

@Entity()
export class IndexEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  ethPriceInWei: number;

  @Column()
  usdPriceInCents: number;

  @Column()
  usdCapitalization: number;

  @Column()
  percentageChange: number;

  @ManyToOne(() => GroupEntity, (group) => group.indexes)
  group: GroupEntity;
}
