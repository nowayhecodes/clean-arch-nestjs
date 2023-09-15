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
import { BaseMapping } from './base.mapping';

@Entity("recipient", { schema: "public" })
export class Recipient extends BaseMapping {

  @Column("character varying", { name: "name" })
  name: string;

  @Column("character varying", { name: "document" })
  document: string;

  @Column("integer", { name: "addressId", nullable: true, unique: true })
  addressId: number | null;

  @OneToOne(() => Address, (address) => address.recipient)
  @JoinColumn([{ name: "addressId", referencedColumnName: "id" }])
  address: Address;
}
