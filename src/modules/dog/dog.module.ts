import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Dog } from './dog.entity';
import { DogService } from './dog.service';
import { Photo } from '../photo/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dog, Photo])],
  providers: [DogService],
})
export class DogModule {}
