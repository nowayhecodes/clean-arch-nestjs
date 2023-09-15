import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { User } from './user.mapping';
import { Recipient } from './recipient.mapping';
import { BaseMapping } from './base.mapping';

@Entity("address", { schema: "public" })
export class Address  extends BaseMapping {

  @Column("character varying", { name: "address1" })
  address1: string;

  @Column("character varying", { name: "address2" })
  address2: string;

  @Column("character varying", { name: "zipcode" })
  zipcode: string;

  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: User;

  @OneToOne(() => Recipient, (recipient) => recipient.address, {cascade: ['insert', 'update', 'soft-remove']})
  recipient: Recipient;
}
