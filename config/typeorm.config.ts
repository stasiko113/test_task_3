import { DataSource } from 'typeorm';
import { EtherTransactions } from '../src/entities/ether-transactions/ether-transactions.entity';
import { CronConfiguration } from '../src/entities/cron-configuration/crone-configuration.entity';
import { CreateCronConfigurationTable1630755292744 } from '../migrations/1693815884658-create-cron-config-table';
import { CreateEtherTransactionsTable1630755292745 } from '../migrations/1693815912302-ether-transactions-table';
import { InsertDataIntoCronConfiguration1630761234567 } from '../migrations/1693816165707-config-create-default';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '11032004',
  database: 'test_task_3',
  entities: [__dirname + '../src/../**/*.entity{.ts,.js}'],
  migrations: [
    CreateCronConfigurationTable1630755292744,
    CreateEtherTransactionsTable1630755292745,
    InsertDataIntoCronConfiguration1630761234567,
  ],
});
