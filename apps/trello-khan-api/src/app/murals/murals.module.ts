import { Module } from '@nestjs/common';
import { MuralsService } from './murals.service';
import { MuralsController } from './murals.controller';
import {PrismaService} from "../prisma/prisma.service";
import {MuralRepository} from "./repositories/mural.repository";

@Module({
  controllers: [MuralsController],
  providers: [MuralsService,PrismaService,MuralRepository]
})
export class MuralsModule {}
