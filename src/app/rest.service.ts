import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://18.218.60.102:8081/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) {  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getData(): Observable<any> {
    return this.http.get(endpoint + 'data').pipe(
      map(this.extractData));
  }

  getOrders(): Observable<any> {
    return this.http.get(endpoint + 'orders').pipe(
      map(this.extractData));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
