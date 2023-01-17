import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, shareReplay, throwError} from "rxjs";
import {Task} from "@prisma/client";
import {TaskF} from "../../../../../../../data/src/lib/model/task";


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  createTask(task: TaskF):Observable<TaskF>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<TaskF>('http://localhost:3333/api/tasks', task,httpOptions).pipe(
    map((response) => response),
    shareReplay(),
    catchError((error) => throwError(error))
  );
  }






}
