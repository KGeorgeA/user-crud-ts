import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserGender {
  MALE = 'male',
  FEMALE = 'female',

}
export enum UserRoleType {
  ADMIN = 'admin',
  USER = 'user',
}
@Entity()
export class User {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({ nullable: true })
    firstName: string;

  @Column({ nullable: true })
    lastName: string;

  @Column({ nullable: true })
    age: number;

  @Column({
    type: 'enum',
    enum: UserGender,
    default: null,
    nullable: true,
  })
    gender: UserGender;

  @Column()
    email: string;

  @Column({ nullable: true })
    phone: string;

  @Column({ nullable: true })
    DoB: Date;

  @Column()
    password: string;

  @Column({
    type: 'enum',
    enum: UserRoleType,
    default: UserRoleType.USER,
  })
    role: UserRoleType;
}
