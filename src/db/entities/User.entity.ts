import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    firstName: string;

  @Column()
    secondName: string;

  @Column()
    age: number;

  @Column()
    isMale: boolean;

  @Column()
    email: string;

  @Column()
    phone: string;

  @Column()
    DoB: Date;

  @Column()
    password: string;
}
