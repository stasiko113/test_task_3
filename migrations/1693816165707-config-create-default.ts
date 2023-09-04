import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertDataIntoCronConfiguration1630761234567 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO cron_configuration (id, lastIteration, frequency, coursour, blocks_count)
      VALUES (1, '2019-11-24 11:22:35', '1', '0x10C4B98', '0')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM cron_configuration WHERE id = 1;
    `);
  }
}
