import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCronConfigurationTable1630755292744 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cron_configuration',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'frequency',
            type: 'varchar',
          },
          {
            name: 'coursour',
            type: 'varchar',
            default: '17583000',
          },
          {
            name: 'lastIteration',
            type: 'date',
          },
          {
            name: 'blocks_count',
            type: 'varchar',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cron_configuration');
  }
}
