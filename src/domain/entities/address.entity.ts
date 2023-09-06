import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';

import { User } from './user.entity';
import { Recipient } from './recipient.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.addresses)
  user: User;

  @Column()
  address1: string;

  @Column()
  address2: string;

  @Column()
  zipcode: string;

  @OneToOne(() => Recipient, (recipient) => recipient.id)
  recipient: Recipient;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleteAt' })
  deleteAt: Date;
}
