import {Tag} from "@prisma/client";


export class TagEntity  implements Tag {
  color: string;
  id: number;
  taskId: number | null;
  titleTag: string;

}
