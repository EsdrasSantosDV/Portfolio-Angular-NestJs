import {PrismaService} from "../../prisma/prisma.service";
import {Injectable} from "@nestjs/common";
import {CreateMuralDto} from "../dto/create-mural.dto";
import {MuralEntity} from "../entities/mural.entity";
import {UpdateMuralDto} from "../dto/update-mural.dto";

@Injectable()
export class MuralRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMuralDto: CreateMuralDto): Promise<MuralEntity> {
    return this.prisma.mural.create({
      data: createMuralDto,
    });
  }

  async findAll(): Promise<MuralEntity[]> {
    return this.prisma.mural.findMany({
      include: {
        task: true
      },
    });
  }

  async findOne(id: number): Promise<MuralEntity> {
    return this.prisma.mural.findUnique({
      where: {
        id: id,
      },
      include: {
        task:true
      },
    });
  }

  async update(id: number,updateMuralDto:UpdateMuralDto): Promise<MuralEntity> {
    return this.prisma.mural.update({
      where: {
        id: id,
      },
      data: updateMuralDto,
      include: {
        task:true
      },
    });
  }

  async remove(id: number): Promise<MuralEntity> {
    return this.prisma.mural.delete({
      where: {
        id: id,
      },
    });
  }
}
