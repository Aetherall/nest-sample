import { Controller, Get, Param } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get(':id/:test')
  nani(@Param('id') id: number, @Param('test') test: string) {
    return Number(id) + 1;
  }

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }
}
