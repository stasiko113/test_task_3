import { Inject, Injectable } from '@nestjs/common';
import { EtherTransactions } from 'src/entities/ether-transactions/ether-transactions.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EtherTransactionsService {
  constructor(
    @Inject('ETHER_TRANSACTIONS_REPOSITORY')
    private readonly etherTransactionsRepo: Repository<EtherTransactions>
  ) {}

  async create(dataToInsert) {
    try {
      return await this.etherTransactionsRepo
        .createQueryBuilder()
        .insert()
        .into(EtherTransactions)
        .values(dataToInsert)
        .execute();
    } catch (e) {
      console.log(e);
    }
  }

  async getTop100Block() {
    return await this.etherTransactionsRepo
      .createQueryBuilder('ether_transactions')
      .select(['SUM(CONV(SUBSTRING(ether_transactions.value, 3), 16, 10)) as summ', 'ether_transactions.blockNumber'])
      .groupBy('ether_transactions.blockNumber')
      .orderBy('summ', 'DESC')
      .limit(100)
      .getRawMany();
  }
}
