import {IsNotEmpty, IsOptional, IsString} from "class-validator";

export class CreateTagDto {
  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  titleTag:string

  @IsOptional()
  taskId:number
}
