import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { PhotoModule } from "./modules/photo/photo.module";
import { DogModule } from "./modules/dog/dog.module";
import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [TypeOrmModule.forRoot(), PhotoModule, DogModule, UserModule]
})
export class ApplicationModule {}
