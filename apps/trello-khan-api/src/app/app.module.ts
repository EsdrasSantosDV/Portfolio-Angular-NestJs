import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { TagModule } from './tag/tag.module';
import { TasksModule } from './tasks/tasks.module';
import { MuralsModule } from './murals/murals.module';


@Module({
  imports: [UsersModule, TagModule, TasksModule, MuralsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
