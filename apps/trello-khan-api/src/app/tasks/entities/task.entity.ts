import {Task} from "@prisma/client";

export class TaskEntity implements Task{
  dateEndAt: Date;
  dateStartAt: Date;
  description: string;
  id: number;
  title: string;
}
