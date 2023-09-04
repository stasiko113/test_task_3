import { Controller, Get } from '@nestjs/common';
import { EtherTransactionsService } from './ether-transactions.service';

@Controller('api/ether-transactions')
export class EtherTransactionsController {
  constructor(private readonly etherTransactionService: EtherTransactionsService) {}

  @Get('getTop100')
  getTop100Block() {
    return this.etherTransactionService.getTop100Block();
  }
}
