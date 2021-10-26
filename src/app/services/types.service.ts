import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { TableData } from '../views/tables/datatable/datatable.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }
  alltypes() {
    return this.httpClient.get<TableData>(`${this.baseUrl}/alltypes`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    )
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  removetype(id: any) {
    return this.httpClient.delete(`${this.baseUrl}/removeuser/${id}`)
  }
  gettype(id: any) {
    return this.httpClient.get(`${this.baseUrl}/getuser/${id}`)
  }

  updatetype(id: any, body: any) {
    return this.httpClient.put(`${this.baseUrl}/updateuser/${id}`, body)

  }
}
