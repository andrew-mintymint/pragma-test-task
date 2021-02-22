import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class IndexMigration1613941192455 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'indexes',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'ethPriceInWei',
            type: 'int',
          },
          {
            name: 'usdPriceInCents',
            type: 'int',
          },
          {
            name: 'usdCapitalization',
            type: 'int',
          },
          {
            name: 'percentageChange',
            type: 'int',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('indexes');
  }
}
