import {Component, Inject} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {Task} from "../../../../../../data/src/lib/model/task";
import {

  dateRangeValidator
} from "../../../../../../utils/src/lib/validators/date-range-validator";

@Component({
  selector: 'ui-dialog-task-kanban',
  templateUrl: './dialog-task-kanban.component.html',
  styleUrls: ['./dialog-task-kanban.component.css'],
})
export class DialogTaskKanbanComponent  {

  titleTask:string
  form = this.fb.group({
      title:['',{validators:[Validators.required]}],
      description:['',{validators:[Validators.required]}],
      dateStartAt: ['',{validators:[Validators.required]}],
      dateEndAt: ['',{validators:[Validators.required]}],
      handTag:['',{validators:[Validators.required]}]
  },
    {
      validators:[dateRangeValidator('dateStartAt', 'dateEndAt')]
    });

  get title()
  {
    return this.form.controls['title'];
  }


  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private task:Task,
              private dialogRef: MatDialogRef<DialogTaskKanbanComponent>) {

    this.titleTask = task.title;
  }

  close() {

    this.dialogRef.close();

  }

  save() {

    this.dialogRef.close(this.form.value);

  }


}


export function openEditTaskDialog(dialog: MatDialog, task:Task) {

  const config = new MatDialogConfig();

  config.disableClose = true;
  config.autoFocus = true;
  config.maxWidth='600px';
  config.maxHeight='400px';



  config.data = {
    ...task
  };

  const dialogRef = dialog.open(DialogTaskKanbanComponent, config);

  return dialogRef.afterClosed();
}
