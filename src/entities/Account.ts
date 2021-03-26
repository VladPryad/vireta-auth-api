import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
 
@Entity()
export default class Account {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column()
  public login: string;
 
  @Column()
  public password: string;

  @Column()
  public googleId: string;
}