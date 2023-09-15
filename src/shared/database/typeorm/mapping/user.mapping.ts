import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import { Address } from './address.mapping';
import { BaseMapping } from './base.mapping';

@Entity("user", { schema: "public" })
export class User extends BaseMapping {

  @Column("character varying", { name: "name" })
  name: string;

  @Column("date", { name: "dob" })
  dob: string;

  @Column("character varying", { name: "email" })
  email: string;

  @Column("character varying", { name: "document" })
  document: string;

  @OneToMany(() => Address, (address) => address.user, { cascade: ['insert', 'update', 'soft-remove'] })
  @JoinColumn([{ name: "addresses", referencedColumnName: "id" }])
  addresses: Address[];
}
