import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({ nullable: true })
    firstName: string;

  @Column({ nullable: true })
    secondName: string;

  @Column({ nullable: true })
    age: number;

  @Column({ nullable: true })
    isMale: boolean;

  @Column({ nullable: false })
    email: string;

  @Column({ nullable: true })
    phone: string;

  @Column({ nullable: true })
    DoB: Date;

  @Column({ nullable: false })
    password: string;
}
