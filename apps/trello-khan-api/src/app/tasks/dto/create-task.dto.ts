import {IsDate, IsNumber, IsOptional, IsString} from "class-validator";
export class CreateTaskDto {

  @IsDate()
  @IsOptional()
  dateEndAt?:Date

  @IsDate()
  @IsOptional()
  dateStartAt?:Date
  @IsString()

  title:string;

  @IsString()
  @IsOptional()
  description?:string;


  @IsNumber()
  @IsOptional()
  muralId?:number;


}
