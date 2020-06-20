import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  url = `${environment.url}${environment.api.task}`;
  constructor(private http: HttpClient) {}

  get(json?: Object): Observable<any> {
    let httpParams;
    if (json) {
      httpParams = new HttpParams().set(
        Object.keys(json)[0],
        Object.values(json)[0]
      );
    }
    return this.http
      .get<any>(this.url, {
        params: httpParams,
        responseType: "json",
        observe: "response",
      })
      .pipe(
        map((data) => {
          return data;
        }),

        catchError((error: any) => {
          return this.handleError(error);
        })
      );
  }

  /*** Post to the server **/
  post(payload): Observable<any> {
    return this.http
      .post<any>(this.url, payload, {
        responseType: "json",
        observe: "response",
      })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((error: any) => {
          return this.handleError(error);
        })
      );
  }

  /*** delete from the server **/
  delete(id): Observable<any> {
    return this.http
      .delete<any>(`${this.url}/${id}`, {
        responseType: "json",
      })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((error: any) => {
          return this.handleError(error);
        })
      );
  }

  /*** put on the server **/
  put(id, payload): Observable<any> {
    return this.http
      .put<any>(`${this.url}/${id}`, payload, {
        responseType: "json",
        observe: "response",
      })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((error: any) => {
          return this.handleError(error);
        })
      );
  }

  // handle error
  handleError(err) {
    let message = err.error.message;
    return throwError(err);
  }
}
