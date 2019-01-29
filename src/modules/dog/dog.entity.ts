import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  RelationId
} from "typeorm";
import { Photo } from "../photo/photo.entity";

@Entity()
export class Dog {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @OneToMany(() => Dog, dog => dog.photos)
  photos: Photo[];

  @RelationId((dog: Dog) => dog.photos)
  photosIds: string[];
}
