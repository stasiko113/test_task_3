import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('ether_transactions')
export class EtherTransactions {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar' })
  from: string;

  @Column({ type: 'varchar' })
  to: string;

  @Column({ type: 'varchar' })
  blockNumber: string;

  @Column({ type: 'varchar' })
  value: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}
