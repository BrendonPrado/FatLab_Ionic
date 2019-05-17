import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from 'src/config/storage_keys.config';
import { Router } from '@angular/router';
var StorageService = /** @class */ (function () {
    function StorageService(router) {
        this.router = router;
    }
    StorageService.prototype.getLocalUser = function () {
        var usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    };
    StorageService.prototype.setLocalUser = function (obj) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
            localStorage.removeItem('AuthUser');
        }
        else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    };
    StorageService.prototype.setUser = function (obj) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
            localStorage.removeItem('AuthUser');
        }
        else {
            localStorage.setItem('AuthUser', JSON.stringify(obj));
        }
    };
    StorageService.prototype.getUser = function () {
        var usr = localStorage.getItem('AuthUser');
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    };
    StorageService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], StorageService);
    return StorageService;
}());
export { StorageService };
//# sourceMappingURL=storage.service.js.map