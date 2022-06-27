/* eslint-disable indent */
import { Entity, Column, PrimaryGeneratedColumn, AfterLoad } from 'typeorm';

export enum UserGender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum UserRoleType {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({
    type: 'enum',
    enum: UserGender,
    default: null,
    nullable: true,
  })
  gender: UserGender;

  @Column({ unique: true })
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

  age: number;

  fullName: string;

  @AfterLoad()
  getVirtualFields() {
    this.age = 123;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
}

export default User;
