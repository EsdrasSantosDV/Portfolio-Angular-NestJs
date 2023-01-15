import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import {PrismaService} from "../prisma/prisma.service";
import {TagRepository} from "./repositories/tag.repository";

@Module({
  controllers: [TagController],
  providers: [TagService,PrismaService,TagRepository]
})
export class TagModule {}
