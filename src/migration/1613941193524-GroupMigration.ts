import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class GroupMigration1613941193524 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'groups',
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
            name: 'index_id',
            type: 'int',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'groups',
      new TableForeignKey({
        columnNames: ['index_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'indexes',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('groups');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('index_id') !== -1,
    );
    await queryRunner.dropForeignKey('groups', foreignKey);
    await queryRunner.dropTable('groups');
  }
}
