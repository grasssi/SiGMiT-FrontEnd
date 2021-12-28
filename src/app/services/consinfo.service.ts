import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
export interface consinfoData {

  nomCons: string,
 
}
export interface TableData extends Array<consinfoData> { }

@Injectable({
  providedIn: 'root'
})
export class ConsinfoService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  allconsinfo() {
    return this.httpClient.get<TableData>(`${this.baseUrl}/allconsinfos`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    )
  }
  // //get all owners without service
  // allownersWs() {
  //   return this.httpClient.get<TableData>(`${this.baseUrl}/allownersws`).pipe(
  //     retry(3), // retry a failed request up to 3 times
  //     catchError(this.handleError)
  //   )
  // }
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
  removecons(id: any) {
    return this.httpClient.delete(`${this.baseUrl}/removeowner/${id}`)
  }

  getcons(id: any) {
    return this.httpClient.get(`${this.baseUrl}/getowner/${id}`)
  }

  updatecons(id: any, body: any) {
    return this.httpClient.put(`${this.baseUrl}/updateowner/${id}`, body)
  }

  addcons(body: any) {
    return this.httpClient.post(`${this.baseUrl}/addconsinfo`, body)
  }
  // affectService(body: any) {
  //   return this.httpClient.put(`${this.baseUrl}/affectService/${body.service}/${body._id}`, body)
  // }
}
