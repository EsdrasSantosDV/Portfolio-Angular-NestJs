import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, shareReplay, throwError } from 'rxjs';
import { MuralF } from '../../../../../../../data/src/lib/model/Mural';

@Injectable({
  providedIn: 'root',
})
export class MuralService {
  constructor(private http: HttpClient) {}

  createMural(mural: MuralF): Observable<MuralF> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post<MuralF>('http://localhost:3333/api/murals', mural, httpOptions)
      .pipe(
        map((response) => response),
        shareReplay(),
        catchError((error) => throwError(error))
      );
  }
}
