import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import {PrismaService} from "../prisma/prisma.service";
import {TasksRepository} from "./repositories/task.repository";

@Module({
  controllers: [TasksController],
  providers: [TasksService,PrismaService,TasksRepository]
})
export class TasksModule {}
