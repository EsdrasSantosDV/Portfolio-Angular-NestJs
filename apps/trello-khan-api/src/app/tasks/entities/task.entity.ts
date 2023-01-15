import {Task} from "@prisma/client";



export class TaskEntity implements Task{

  dateEndAt: Date | null;

  dateStartAt: Date | null;

  description: string | null;
  id: number;
  title: string;

}
