import {PrismaService} from "../../prisma/prisma.service";
import {Injectable} from "@nestjs/common";
import {CreateTaskDto} from "../dto/create-task.dto";
import {TaskEntity} from "../entities/task.entity";
import {UpdateTaskDto} from "../dto/update-task.dto";

@Injectable()
export class TasksRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    return this.prisma.task.create({
      data: createTaskDto,
    });
  }

  async findAll(): Promise<TaskEntity[]> {
    return this.prisma.task.findMany({
      include: {
        tags: {
          select: {
            id:true,
            titleTag: true,
            color:true,
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<TaskEntity> {
    return this.prisma.task.findUnique({
      where: {
        id: id,
      },
      include: {
        tags: {
          select: {
            id:true,
            titleTag: true,
            color:true,
          },
        },
      },
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<TaskEntity> {
    return this.prisma.task.update({
      where: {
        id: id,
      },
      data: updateTaskDto,
      include: {
        tags: {
          select: {
            id:true,
            titleTag: true,
            color:true,
          },
        },
      },
    });
  }

  async remove(id: number): Promise<TaskEntity> {
    return this.prisma.task.delete({
      where: {
        id: id,
      },
    });
  }
}
