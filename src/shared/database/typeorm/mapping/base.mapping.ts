import { randomUUID } from 'crypto';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { getUTCDate } from '~/shared/common/helpers/utc-date-helpers';

export class BaseMapping {
  @PrimaryColumn('uuid', { primary: true, name: 'id' })
  id: string;

  @Generated('increment')
  @Column({ type: 'bigint', name: 'alternative_id' })
  alternativeId: number;

  @CreateDateColumn({ name: 'created_date', type: 'timestamp with time zone' })
  createdAt?: Date;

  @UpdateDateColumn({
    name: 'updated_date',
    nullable: true,
    type: 'timestamp with time zone',
  })
  updatedAt?: Date;

  @DeleteDateColumn({
    name: 'deleted_date',
    nullable: true,
    type: 'timestamp with time zone',
  })
  deletedAt?: Date;

  @BeforeInsert()
  defaultUTCDate() {
    this.createdAt = this.createdAt || getUTCDate();
  }

  @BeforeInsert()
  defaultUUID() {
    this.id = this.id || randomUUID();
  }
}
