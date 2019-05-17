import * as tslib_1 from "tslib";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StorageService } from '../service/storage.service';
import { API_CONFIG } from '../config/api.config';
import { Injectable } from '@angular/core';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(storage) {
        this.storage = storage;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var localUser = this.storage.getLocalUser();
        var N = API_CONFIG.baseUrl.length;
        var requestToAPI = req.url.substring(0, N) === API_CONFIG.baseUrl;
        if (localUser && requestToAPI) {
            console.log(localUser.token);
            var authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + localUser.token) });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [StorageService])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
export { AuthInterceptor };
export var AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};
//# sourceMappingURL=auth.interceptor.js.map