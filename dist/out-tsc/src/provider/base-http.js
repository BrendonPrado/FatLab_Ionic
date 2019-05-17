import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
var BaseHttpService = /** @class */ (function () {
    function BaseHttpService(http) {
        this.http = http;
        this.loader = null;
        this.baseApiPath = this.getApiPath();
    }
    // @name getApiPath
    // @description Return API base path
    // @returns string
    BaseHttpService.prototype.getApiPath = function () {
        return 'http://localhost:8080';
    };
    // @name setRequestParamsAndHeaders
    // @description set HTTP default params / headers
    // @returns void
    BaseHttpService.prototype.setRequestParamsAndHeaders = function (headers, urlParams, params) {
        if (params === void 0) { params = {}; }
        // tslint:disable-next-line: forin
        for (var key in params) {
            urlParams.set(key, params[key]);
        }
    };
    // @name get
    // @description HTTP get method
    // @returns Observable
    BaseHttpService.prototype.get = function (url, param, extraParams) {
        if (param === void 0) { param = {}; }
        if (extraParams === void 0) { extraParams = {}; }
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        var params = new HttpParams();
        this.setRequestParamsAndHeaders(headers, param, params);
        return this.intercept(this.http
            .get(this.baseApiPath + "/" + url, { headers: headers, params: params }));
    };
    // @name post
    // @description HTTP post method
    // @returns Observable
    BaseHttpService.prototype.post = function (url, data, extraParams) {
        if (data === void 0) { data = {}; }
        if (extraParams === void 0) { extraParams = {}; }
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.setRequestParamsAndHeaders(headers);
        return this.intercept(this.http
            .post(this.baseApiPath + "/" + url, data, { headers: headers }));
    };
    // @name put
    // @description HTTP put method
    // @returns Observable
    BaseHttpService.prototype.put = function (url, data, extraParams) {
        if (data === void 0) { data = {}; }
        if (extraParams === void 0) { extraParams = {}; }
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.setRequestParamsAndHeaders(headers);
        return this.intercept(this.http
            .put(this.baseApiPath + "/" + url, data, { headers: headers }));
    };
    // @name patch
    // @description HTTP patch method
    // @returns Observable
    BaseHttpService.prototype.patch = function (url, data, extraParams) {
        if (data === void 0) { data = {}; }
        if (extraParams === void 0) { extraParams = {}; }
        console.log('URL: ' + url);
        console.log(data);
        console.log('------------------------------------------------------------');
        console.log(this.baseApiPath + "/" + url);
        console.log('------------------------------------------------------------');
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.setRequestParamsAndHeaders(headers);
        return this.intercept(this.http
            .patch(this.baseApiPath + "/" + url, data, { headers: headers }));
    };
    // @name intercept
    // @description Intercept all requests
    BaseHttpService.prototype.intercept = function (observable, extraParams) {
        if (observable === void 0) { observable = {}; }
        if (extraParams === void 0) { extraParams = {}; }
    };
    // @name hideLoading
    // @description Hide loading
    BaseHttpService.prototype.hideLoading = function () {
        if (this.loader) {
            this.loader.dismissAll();
        }
        this.loader = null;
    };
    BaseHttpService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], BaseHttpService);
    return BaseHttpService;
}());
export { BaseHttpService };
//# sourceMappingURL=base-http.js.map