import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Dog } from "./dog.entity";
import { Repository } from "typeorm";
import { Photo } from "../photo/photo.entity";

@Injectable()
export class DogService {
  constructor(
    @InjectRepository(Dog) private readonly dogRepository: Repository<Dog>,
    @InjectRepository(Photo) private readonly photoModule: Repository<Photo>
  ) {}

  async findOneByName(name: string) {
    const result = await this.dogRepository.find({
      where: { name },
      relations: ["photos"]
    });

    return result;
  }
}
