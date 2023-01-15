import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { TagModule } from './tag/tag.module';


@Module({
  imports: [UsersModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
