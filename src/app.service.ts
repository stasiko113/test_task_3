import { HttpStatus, Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ErrorMessageHandler } from './utils/ErrorHandler/error-handler.utils';
import { CroneConfigurationService } from './app/crone-configuration/crone-configuration.service';
import { EtherTransactionsService } from './app/ether-transactions/ether-transactions.service';
import { HttpRequestsService } from './app/http-requests/http-requests.service';

@Injectable()
export class AppService {
  constructor(
    private readonly httpRequestsService: HttpRequestsService,
    private readonly cronConfigurationService: CroneConfigurationService,
    private readonly etherTransactionsService: EtherTransactionsService
  ) {}

  // @Cron('*/10 * * * *')
  private async getLastBlock(): Promise<void> {
    try {
      const result = await this.httpRequestsService.getLastEtherBlock();
      await this.cronConfigurationService.saveLastBlock(result.data.result);
    } catch (e) {
      ErrorMessageHandler(e.message, HttpStatus.CONFLICT);
    }
  }

  @Cron('*/12 * * * * *')
  private async parseBlock(): Promise<void> {
    try {
      const { cursor, blocks_count } = await this.cronConfigurationService.getCursorAndBlocksCount();
      if (blocks_count - cursor > 0) {
        const newCursor = cursor + 1;
        const cursor16System = newCursor.toString(16);
        const response = await this.httpRequestsService.getEtherBlock(cursor16System);
        const { transactions } = response.result;
        if (transactions.length > 0) {
          await this.etherTransactionsService.create(
            transactions
              .filter(transaction => transaction.to && transaction.value)
              .map(transaction => ({
                to: transaction.to,
                blockNumber: transaction.blockNumber,
                value: transaction.value,
                from: transaction.from,
              }))
          );
        }
        await this.cronConfigurationService.updateCursor(cursor16System);
      } else {
        await this.getLastBlock();
      }
    } catch (e) {
      ErrorMessageHandler(e.message, HttpStatus.CONFLICT);
    }
  }
}
