import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';
import { Article, Author, Comment, Page, Content, Tag } from './index';

@Entity()
export default class Publication {
  @PrimaryColumn({type: 'varchar'})
  id!: string;

  @Column({type: 'varchar'})
  name!: string;

  @Column({type: 'bool'})
  internal!: boolean;

  @Column({type: 'bool'})
  official!: boolean;

  @Column({type: 'varchar'})
  author!: string;
  @Column({type: 'varchar'})
  pdf!: string;

  @OneToMany(() => Article, article => article.tags)
  articles!: Article[];

  @OneToMany(() => Comment, comment => comment.publication)
  comments!: Comment[];
  @OneToMany(() => Content, content => content.publication)
  contents!: Content[];

  @OneToMany(() => Page, page => page.publication)
  pages!: Page[];
}
