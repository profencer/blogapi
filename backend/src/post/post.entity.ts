import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../user/user.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id?: string;

  @Column('varchar')
  @ApiProperty()
  title?: string;

  @Column('text')
  @ApiProperty()
  content?: string;

  @Column({ type: 'boolean', default: false })
  @ApiProperty()
  published?: boolean;

  @Column('uuid')
  @ApiProperty()
  authorId?: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'authorId' })
  @ApiProperty()
  author?: User;

  @CreateDateColumn()
  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;

}
