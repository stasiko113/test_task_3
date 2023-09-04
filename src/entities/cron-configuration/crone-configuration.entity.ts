import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cron_configuration')
export class CronConfiguration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  frequency: string;

  @Column({ type: 'varchar', default: 17583000 })
  coursour: string;

  @Column('date')
  lastIteration: string;

  @Column({ type: 'varchar' })
  blocks_count: string;
}
