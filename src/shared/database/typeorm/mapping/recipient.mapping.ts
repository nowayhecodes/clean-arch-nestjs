import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Address } from './address.mapping';

@Entity("recipient", { schema: "public" })
export class Recipient {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("character varying", { name: "document" })
  document: string;

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

  @DeleteDateColumn()
  deleteAt: Date | null;

  @Column("integer", { name: "addressId", nullable: true, unique: true })
  addressId: number | null;

  @OneToOne(() => Address, (address) => address.recipient)
  @JoinColumn([{ name: "addressId", referencedColumnName: "id" }])
  address: Address;
}
