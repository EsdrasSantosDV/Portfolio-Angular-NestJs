import {Mural} from "@prisma/client";

export class MuralEntity implements Mural{
  id: number;
  title: string;

}
