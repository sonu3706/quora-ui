import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService<T> {
  constructor(private httpClient: HttpClient) {}

  /*POST API*/
  public postDataApi(
    baseUrl: string,
    restUrl: string,
    body: any
  ): Observable<T> {
    const httpParams = new HttpParams();
    let headers = new HttpHeaders()
      .append('content-type', 'application/json')
      .set('accept', 'application/json');
    return this.httpClient.post<T>(baseUrl.concat(restUrl), body, {
      headers: headers,
      params: httpParams,
    });
  }

  /*GET API*/
  public getDataApi(baseUrl: string, restUrl: string): Observable<T> {
    return this.httpClient.get<T>(baseUrl.concat(restUrl));
  }

  /*PUT API*/
  public putDataApi(
    basesUrl: string,
    restUrl: string,
    body: any
  ): Observable<T> {
    const httpParams = new HttpParams();
    let headers = new HttpHeaders()
      .append('content-type', 'application/json')
      .set('accept', 'application/json');
    return this.httpClient.put<T>(basesUrl.concat(restUrl), body, {
      headers: headers,
      params: httpParams,
    });
  }

  /*DELETE API*/
  public deleteDataApi(
    basesUrl: string,
    restUrl: string,
    id: string
  ): Observable<T> {
    return this.httpClient.delete<T>(
      basesUrl.concat(restUrl).concat('/').concat(id)
    );
  }
}
