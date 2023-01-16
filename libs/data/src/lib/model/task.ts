import {Validators} from "@angular/forms";
import {TagLabel} from "./TagLabel";

export interface TaskF {
  id?:number|null,
  title:string,
  description?:string;
  dateStartAt?:string;
  dateEndAt?:string;
  tags?:TagLabel[];
  muralId?:number|null;
}
