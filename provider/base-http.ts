import { ReservarLabPage } from './../src/app/reservar-lab/reservar-lab.page';
import { Injectable } from "@angular/core";
import "rxjs/add/operator/catch";
import { Http, Response, Headers, URLSearchParams } from "@angular/http";

@Injectable()
export class BaseHttpService {
  baseApiPath: string;
  loader: any = null;

  constructor(
    private http: Http,
  ) {
    this.baseApiPath = this.getApiPath();
  }

  // @name getApiPath
  // @description Return API base path
  // @returns string
  private getApiPath(): string {
    return "http://localhost:8080";
    
  }

  // @name setRequestParamsAndHeaders
  // @description set HTTP default params / headers
  // @returns void
  private setRequestParamsAndHeaders(
    headers: Headers,
    urlParams: URLSearchParams,
    params: any = {}
  ): void {
    for (var key in params) {
      urlParams.set(key, params[key]);
    }
  }

  // @name get
  // @description HTTP get method
  // @returns Observable
  public get(url: string, params: any = {}, extraParams: any = {}) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let search = new URLSearchParams();

    this.setRequestParamsAndHeaders(headers, search, params);

    return this.intercept(
      this.http
        .get(`${this.baseApiPath}/${url}`, { headers, search })
    );
  }

  // @name post
  // @description HTTP post method
  // @returns Observable
  public post(url: string, data: any = {}, extraParams: any = {}) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let search = new URLSearchParams();

    this.setRequestParamsAndHeaders(headers, search);

    return this.intercept(
      this.http
        .post(`${this.baseApiPath}/${url}`, data, { headers })
    );
  }

  // @name put
  // @description HTTP put method
  // @returns Observable
  public put(url: string, data: any = {}, extraParams: any = {}) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let search = new URLSearchParams();

    this.setRequestParamsAndHeaders(headers, search);

    return this.intercept(
      this.http
        .put(`${this.baseApiPath}/${url}`, data, { headers })
    );
  }

  // @name patch
  // @description HTTP patch method
  // @returns Observable
  public patch(url: string, data: any = {}, extraParams: any = {}) {
    console.log("URL: " + url);
    console.log(data);

    console.log("------------------------------------------------------------");
    console.log(`${this.baseApiPath}/${url}`);
    console.log("------------------------------------------------------------");

    let headers = new Headers({ "Content-Type": "application/json" });
    let search = new URLSearchParams();

    this.setRequestParamsAndHeaders(headers, search);

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
