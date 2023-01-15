import {Injectable} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import {TasksRepository} from "./repositories/task.repository";
import {TaskEntity} from "./entities/task.entity";
import {UpdateTaskDto} from "./dto/update-task.dto";

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository:TasksRepository)
  {

  }
  create(createtaskDto: CreateTaskDto) {
    return this.tasksRepository.create(createtaskDto);
  }

  findAll() {
    return this.tasksRepository.findAll();
  }

  async findOne(id: number): Promise<TaskEntity> {
    return await this.tasksRepository.findOne(id);
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.tasksRepository.update(id, updateTaskDto);
  }

  remove(id: number) {
    return this.tasksRepository.remove(id);
  }
}
