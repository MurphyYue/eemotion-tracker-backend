import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EmotionRecord {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    createDate: string;

    @Column()
    createTime: string;

    @Column()
    userId: string;

    @Column()
    userName: string;

    @Column()
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
}

