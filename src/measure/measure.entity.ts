import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Measure {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  customerCode: string;

  @Column('timestamp')
  measureDatetime: Date;

  @Column()
  measureType: 'WATER' | 'GAS';

  @Column()
  hasConfirmed: boolean;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  measureValue: number;
}
