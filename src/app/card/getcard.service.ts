import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ICard } from './cards/card';
import { tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GetcardService {
  private cardUrl = 'api/cards.json'

  constructor(private http: HttpClient) { }

  getCards(): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.cardUrl)

  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
