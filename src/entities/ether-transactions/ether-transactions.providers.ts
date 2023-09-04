import { DataSource } from 'typeorm';
import { EtherTransactions } from './ether-transactions.entity';

export const EtherTransactionsProviders = [
  {
    provide: 'ETHER_TRANSACTIONS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(EtherTransactions),
    inject: ['DATA_SOURCE'],
  },
];
