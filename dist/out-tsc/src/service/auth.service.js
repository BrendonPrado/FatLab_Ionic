import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { StorageService } from './storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
var AuthService = /** @class */ (function () {
    function AuthService(http, storage, router) {
        this.http = http;
        this.storage = storage;
        this.router = router;
        this.jwtHelper = new JwtHelperService();
    }
    AuthService.prototype.me = function () {
        return this.http.get(API_CONFIG.baseUrl + "/auth/me");
    };
    AuthService.prototype.authenticate = function (creds) {
        return this.http.post(API_CONFIG.baseUrl + "/login", creds, {
            observe: 'response',
        });
    };
    AuthService.prototype.succesfulLogin = function (authorizationToken) {
        var tok = authorizationToken.substring(7);
        var user = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
    };
    AuthService.prototype.logout = function () {
        this.storage.setLocalUser(null);
        this.router.navigate(['/']);
    };
    AuthService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient, StorageService, Router])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map