import {
  Entity,
  Column,
  ObjectIdColumn,
  ObjectID,
  ManyToMany,
  ManyToOne
} from "typeorm";
import { Dog } from "../dog/dog.entity";

@Entity()
export class Photo {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  isPublished: boolean;

  @ManyToOne(() => Dog)
  dog: Dog;
}
