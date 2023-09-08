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

import { User } from './user.entity';
import { Recipient } from './recipient.entity';

@Entity("address", { schema: "public" })
export class Address {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "address1" })
  address1: string;

  @Column("character varying", { name: "address2" })
  address2: string;

  @Column("character varying", { name: "zipcode" })
  zipcode: string;

  @Column("timestamp without time zone", {
    name: "createdAt",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp without time zone", {
    name: "updatedAt",
    default: () => "now()",
  })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleteAt", nullable: true })
  deleteAt: Date | null;

  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: User;

  @OneToOne(() => Recipient, (recipient) => recipient.address)
  recipient: Recipient;
}
