import {Injectable} from "@nestjs/common";
import {PrismaService} from "../../prisma/prisma.service";
import {CreateUserDto} from "../../users/dto/create-user.dto";
import {UserEntity} from "../../users/entities/user.entity";
import {UpdateUserDto} from "../../users/dto/update-user.dto";
import {CreateTagDto} from "../dto/create-tag.dto";
import {TagEntity} from "../entities/tag.entity";
import {UpdateTagDto} from "../dto/update-tag.dto";

@Injectable()
export class TagRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateTagDto): Promise<TagEntity> {
    return this.prisma.tag.create({
      data: createUserDto,
    });
  }

  async findAll(): Promise<TagEntity[]> {
    return this.prisma.tag.findMany();
  }

  async findOne(id: number): Promise<TagEntity> {
    return this.prisma.tag.findUnique({
      where: {
        id: id,
      },

    });
  }

  async update(id: number, updateTagDto: UpdateTagDto): Promise<TagEntity> {
    return this.prisma.tag.update({
      where: {
        id: id,
      },
      data: updateTagDto
    });
  }

  async remove(id: number): Promise<TagEntity> {
    return this.prisma.tag.delete({
      where: {
        id: id,
      },
    });
  }
}
