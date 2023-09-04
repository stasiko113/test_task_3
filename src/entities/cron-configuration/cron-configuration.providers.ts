import { DataSource } from 'typeorm';
import { CronConfiguration } from './crone-configuration.entity';

export const CronConfigurationProviders = [
  {
    provide: 'CRON_CONFIGURATION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CronConfiguration),
    inject: ['DATA_SOURCE'],
  },
];
