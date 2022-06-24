import { MigrationInterface, QueryRunner } from "typeorm";

export class sync1656076078030 implements MigrationInterface {
    name = 'sync1656076078030'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "secondName"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "isMale"
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "lastName" character varying
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."user_gender_enum" AS ENUM('male', 'female')
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "gender" "public"."user_gender_enum"
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'user')
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "role" "public"."user_role_enum" NOT NULL DEFAULT 'user'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "role"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."user_role_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "gender"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."user_gender_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "lastName"
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "isMale" boolean
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "secondName" character varying
        `);
    }

}
