import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

import { Address } from './address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('date')
  dob: Date;

  @Column()
  email: string;

  @Column()
  document: string;

  @OneToMany(() => Address, (address) => address.user, { cascade: ['insert', 'update'] })
  addresses?: Address[];

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleteAt' })
  deleteAt: Date;
}
