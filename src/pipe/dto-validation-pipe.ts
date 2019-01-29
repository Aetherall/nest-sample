import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class DtoValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype, type }: ArgumentMetadata) {
    if (!metatype || !this.shouldBeValidated(metatype) || type === 'custom') {
      return value;
    }

    let dto: any;
    let errors: any[];

    try {
      dto = plainToClass(metatype, value);
      errors = await validate(dto, { whitelist: true });
    } catch (err) {
      console.log('DTO ERROR');
      throw new BadRequestException(err.message || err);
    }

    if (errors.length > 0) {
      console.log('DTO VALIDATION ERROR');
      throw new BadRequestException(errors);
    }
  }

  private shouldBeValidated(metatype: any): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return (
      !types.find(type => metatype === type) &&
      !(metatype === null || metatype === undefined)
    );
  }
}
