import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'; 

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createTimestamp: Date;

  @Column({ nullable: true })
  userId: string;

  @Column({ nullable: true })
  userName: string;

  @Column({ nullable: true })
  mode: number; // 1 for mood, 2 for other mode

  // Mode 1 fields
  @Column({ nullable: true })
  happening: string;

  @Column({ nullable: true })
  feeling: string;

  @Column({ nullable: true })
  intensity: string;

  @Column({ nullable: true })
  question: string;

  @Column({ nullable: true })
  relatedQuestion: string;

  // Mode 2 fields: "image" "text "
  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  text: string;

  constructor(record: Partial<Record>) {
    Object.assign(this, record);
  }
}
