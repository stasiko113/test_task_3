import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CronConfiguration } from 'src/entities/cron-configuration/crone-configuration.entity';
import { ErrorMessageHandler } from 'src/utils/ErrorHandler/error-handler.utils';
import { Repository } from 'typeorm';

@Injectable()
export class CroneConfigurationService {
  constructor(
    @Inject('CRON_CONFIGURATION_REPOSITORY')
    private readonly cronConfigurationRepo: Repository<CronConfiguration>,
  ) {}

  public async saveLastBlock(blocks_count: string) {
    return this.cronConfigurationRepo.update({ id: 1 }, { blocks_count });
  }

  public async updateCursor(cursor: string) {
    return this.cronConfigurationRepo.update({ id: 1 }, { coursour: cursor });
  }

  public async getCursorAndBlocksCount(): Promise<{
    cursor: number;
    blocks_count: number;
  }> {
    try {
      const config = await this.cronConfigurationRepo.findOneBy({ id: 1 });
      return {
        cursor: parseInt(config.coursour, 16),
        blocks_count: parseInt(config.blocks_count, 16),
      };
    } catch (e) {
      ErrorMessageHandler(e.message, HttpStatus.CONFLICT);
    }
  }
}
