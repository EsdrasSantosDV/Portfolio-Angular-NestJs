import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, shareReplay, throwError} from "rxjs";
import {Tag} from "@prisma/client";
import {TagLabel} from "../../../../../../../data/src/lib/model/TagLabel";


@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http:HttpClient) { }

  getAllTags():Observable<TagLabel[]>{
    return this.http.get<TagLabel[]>('http://localhost:3333/api/tags').pipe(
      map((response) => response),
      shareReplay(),
      catchError((error) => throwError(error))
    );
  }


}
