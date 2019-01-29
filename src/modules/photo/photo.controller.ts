import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { DtoValidationPipe } from '../../pipe/dto-validation-pipe';
import { PhotoPostInDto } from './dto/photo-post-in.dto';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get(':id/:test')
  nani(@Param('id') id: number, @Param('test') test: string) {
    return Number(id) + 1;
  }

  @Post()
  create(@Body(DtoValidationPipe) input: PhotoPostInDto) {
    return input;
    /// create stuff
  }

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }
}
