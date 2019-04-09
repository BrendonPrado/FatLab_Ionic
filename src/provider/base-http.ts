import { Injectable } from '@angular/core';
import { Headers, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class BaseHttpService {
  
  baseApiPath: string;
  loader: any = null;

  constructor(
    private http: HttpClient,
  ) {
    this.baseApiPath = this.getApiPath();
  }

  // @name getApiPath
  // @description Return API base path
  // @returns string
  private getApiPath(): string {
    return 'http://localhost:8080';

  }

  // @name setRequestParamsAndHeaders
  // @description set HTTP default params / headers
  // @returns void
  private setRequestParamsAndHeaders(
    headers: HttpHeaders,
    urlParams?: HttpParams,
    params: any = {}
  ): void {
// tslint:disable-next-line: forin
    for (let key in params) {
      urlParams.set(key, params[key]);
    }
  }

  // @name get
  // @description HTTP get method
  // @returns Observable
  public get(url: string, param: any = {}, extraParams: any = {}) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = new HttpParams();

    this.setRequestParamsAndHeaders(headers, param, params);

    return this.intercept(
      this.http
        .get(`${this.baseApiPath}/${url}`, { headers, params })
    );
  }

  // @name post
  // @description HTTP post method
  // @returns Observable
  public post(url: string, data: any = {}, extraParams: any = {}) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.setRequestParamsAndHeaders(headers);

    return this.intercept(
      this.http
        .post(`${this.baseApiPath}/${url}`, data, { headers })
    );
  }

  // @name put
  // @description HTTP put method
  // @returns Observable
  public put(url: string, data: any = {}, extraParams: any = {}) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.setRequestParamsAndHeaders(headers);

    return this.intercept(
      this.http
        .put(`${this.baseApiPath}/${url}`, data, { headers })
    );
  }

  // @name patch
  // @description HTTP patch method
  // @returns Observable
  public patch(url: string, data: any = {}, extraParams: any = {}) {
    console.log('URL: ' + url);
    console.log(data);

    console.log('------------------------------------------------------------');
    console.log(`${this.baseApiPath}/${url}`);
    console.log('------------------------------------------------------------');

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.setRequestParamsAndHeaders(headers);

    return this.intercept(
      this.http
        .patch(`${this.baseApiPath}/${url}`, data, { headers })

    );
  }

  // @name intercept
  // @description Intercept all requests
  private intercept(
    observable: any = {},
    extraParams: any = {}
  ) { }


  // @name hideLoading
  // @description Hide loading
  private hideLoading(): void {
    if (this.loader) {
      this.loader.dismissAll();
    }

    this.loader = null;
  }

  // @name showError

}
