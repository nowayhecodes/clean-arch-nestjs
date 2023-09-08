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

import { Address } from './address.entity';

@Entity("user", { schema: "public" })
export class User {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("date", { name: "dob" })
  dob: string;

  @Column("character varying", { name: "email" })
  email: string;

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

  @Column("timestamp without time zone", { name: "deleteAt", nullable: true })
  deleteAt: Date | null;

  @OneToMany(() => Address, (address) => address.user)
  @JoinColumn([{ name: "addresses", referencedColumnName: "id" }])
  @Column({
    type: 'jsonb',    
    nullable: true
  })
  addresses: Address[];
}
