import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'; 

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createTimestamp: Date;

  @Column({ nullable: false })
  userId: string;

  @Column({ nullable: false })
  userName: string;

  @Column({ nullable: false })
  content: string;

  constructor(record: Partial<Record>) {
    Object.assign(this, record);
  }
}
