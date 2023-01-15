import {IsDate, IsString} from "class-validator";
export class CreateTaskDto {

  @IsDate()
  dateEndAt:Date
  @IsDate()
  dateStartAt:Date
  @IsString()
  title:string;
  @IsString()
  description:string;




}
