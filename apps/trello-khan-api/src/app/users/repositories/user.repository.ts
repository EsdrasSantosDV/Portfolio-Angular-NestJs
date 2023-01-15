import {PrismaService} from "../../prisma/prisma.service";
import {CreateUserDto} from "../dto/create-user.dto";
import {UserEntity} from "../entities/user.entity";
import {UpdateUserDto} from "../dto/update-user.dto";
import {Injectable} from "@nestjs/common";

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  async findAll(): Promise<UserEntity[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<UserEntity> {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },

    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: updateUserDto
    });
  }

  async remove(id: number): Promise<UserEntity> {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
