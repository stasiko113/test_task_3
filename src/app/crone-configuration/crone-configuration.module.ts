import { Module } from '@nestjs/common';
import { CroneConfigurationService } from './crone-configuration.service';
import { CronConfigurationProviders } from 'src/entities/cron-configuration/cron-configuration.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...CronConfigurationProviders, CroneConfigurationService],
  exports: [CroneConfigurationService],
})
export class CroneConfigurationModule {}
