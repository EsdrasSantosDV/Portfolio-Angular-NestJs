import {IsString} from "class-validator";

export class CreateMuralDto {
  @IsString()

  title:string;


}
