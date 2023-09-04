import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { CroneConfigurationModule } from './app/crone-configuration/crone-configuration.module';
import { EtherTransactionsModule } from './app/ether-transactions/ether-transactions.module';
import { CroneConfigurationService } from './app/crone-configuration/crone-configuration.service';
import { CronConfigurationProviders } from './entities/cron-configuration/cron-configuration.providers';
import { EtherTransactionsProviders } from './entities/ether-transactions/ether-transactions.providers';
import { EtherTransactionsService } from './app/ether-transactions/ether-transactions.service';
import { HttpRequestsModule } from './app/http-requests/http-requests.module';
import { HttpRequestsService } from './app/http-requests/http-requests.service';

@Module({
  providers: [
    AppService,
    CroneConfigurationService,
    ...CronConfigurationProviders,
    ...EtherTransactionsProviders,
    EtherTransactionsService,
    HttpRequestsService,
  ],
  imports: [
    DatabaseModule,
    HttpModule,
    ScheduleModule.forRoot(),
    CroneConfigurationModule,
    EtherTransactionsModule,
    HttpRequestsModule,
  ],
  exports: [
    ...CronConfigurationProviders,
    ...EtherTransactionsProviders,
    HttpModule,
    CroneConfigurationModule,
    EtherTransactionsModule,
  ],
})
export class AppModule {}
