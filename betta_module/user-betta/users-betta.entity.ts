import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ length: 128, nullable: true })
  firstName: string;

  @Column({ length: 128, nullable: true })
  lastName: string;

  @Column({ length: 128, nullable: true })
  test: string;

  @Column('date')
  brithDay: Date;

  @Column()
  isActive: boolean;

  @Column({ length: 128, nullable: true })
  username: string;


  @Column({ length: 128, nullable: true })
  email: string;

  @Column({ length: 255, nullable: true })
  password: string;

  @Column()
  created: Date;

  @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)", onUpdate: "CURRENT_TIMESTAMP(3)" })
  updated: Date;
}