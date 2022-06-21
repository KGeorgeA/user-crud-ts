import { MigrationInterface, QueryRunner } from "typeorm";

export class sync1655814788693 implements MigrationInterface {
    name = 'sync1655814788693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "firstName" character varying NOT NULL,
                "secondName" character varying NOT NULL,
                "age" integer NOT NULL,
                "isMale" boolean NOT NULL,
                "email" character varying NOT NULL,
                "phone" character varying NOT NULL,
                "DoB" TIMESTAMP NOT NULL,
                "password" character varying NOT NULL,
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }

}
