import { Module } from '@nestjs/common';
import { EtherTransactionsService } from './ether-transactions.service';
import { DatabaseModule } from 'src/database/database.module';
import { EtherTransactionsProviders } from 'src/entities/ether-transactions/ether-transactions.providers';
import { EtherTransactionsController } from './ether-transactions.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...EtherTransactionsProviders, EtherTransactionsService],
  exports: [EtherTransactionsService],
  controllers: [EtherTransactionsController],
})
export class EtherTransactionsModule {}
