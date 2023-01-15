import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {Task} from "../../../../../../data/src/lib/model/task";
import {TagLabel} from "../../../../../../data/src/lib/model/TagLabel";
import {

  dateRangeValidator
} from "../../../../../../utils/src/lib/validators/date-range-validator";
import {minMaxLengthValidator} from "../../../../../../utils/src/lib/validators/min-max-length-descriptionTask";
import {TagService} from "../kanban-services/label/tag.service";
import {Observable} from "rxjs";


@Component({
  selector: 'ui-dialog-task-kanban',
  templateUrl: './dialog-task-kanban.component.html',
  styleUrls: ['./dialog-task-kanban.component.css'],
})
export class DialogTaskKanbanComponent  implements  OnInit{

  titleTask:string
  form = this.fb.group({
      title:['',{validators:[Validators.required]}],
      description:['',{validators:[Validators.required,minMaxLengthValidator(10,300)]}],
      dateStartAt: ['',{validators:[Validators.required]}],
      dateEndAt: ['',{validators:[Validators.required]}],
      handTag:['',{validators:[Validators.required]}]
  },
    {
      validators:[dateRangeValidator('dateStartAt', 'dateEndAt')]
    });

  handTagList$:Observable<TagLabel[]>;


  get title()
  {
    return this.form.controls['title'];
  }
  get description()
  {
    return this.form.controls['description'];
  }
  get dateStartAt()
  {
    return this.form.controls['dateStartAt'];
  }
  get dateEndAt()
  {
    return this.form.controls['dateEndAt'];
  }
  get handTag()
  {
    return this.form.controls['handTag'];
  }

  constructor(private fb: FormBuilder,
              private tags:TagService,
              @Inject(MAT_DIALOG_DATA) private task:Task,
              private dialogRef: MatDialogRef<DialogTaskKanbanComponent>) {
    this.titleTask = task.title;
  }

  ngOnInit()
  {
    this.handTagList$=this.tags.getAllTags();

  }
  close() {

    this.dialogRef.close();

  }
  save() {

    this.dialogRef.close(this.form.value);

  }
  onHandTagRemoved(handTag: TagLabel) {
    const labels = this.form.controls['handTag'].value as TagLabel[];
    this.removeFirst(labels, handTag);
    this.form.controls['handTag'].setValue([...labels]);
  }
  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }


}


export function openEditTaskDialog(dialog: MatDialog, task:Task) {

  const config = new MatDialogConfig();

  config.disableClose = true;
  config.autoFocus = true;


  config.data = {
    ...task
  };

  const dialogRef = dialog.open(DialogTaskKanbanComponent, config);

  return dialogRef.afterClosed();
}
