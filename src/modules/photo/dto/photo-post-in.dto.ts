import { IsString, Length } from 'class-validator';

export class PhotoPostInDto {
  @IsString()
  name: string;

  @IsString()
  @Length(10, 30)
  description: string;
}
