import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Post } from '../post/post.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id?: string;

  @Column({ type: 'text', unique: true })
  @ApiProperty()
  email?: string;

  @Column('varchar')
  @ApiProperty()
  name?: string;

  @Column('enum')
  @ApiProperty({ enum: ['UserRole'] })
  role?: 'UserRole';

  @OneToMany(() => Post, post => post.authorId)
  @ApiProperty()
  posts?: Post[];

  @CreateDateColumn()
  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;

}
