import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { StorageService } from 'src/service/storage.service';
import { Usuario } from 'src/models/usuario';
import { ControllService } from 'src/service/controll.service';
var LandingPage = /** @class */ (function () {
    function LandingPage(auth, storage, controll) {
        this.auth = auth;
        this.storage = storage;
        this.controll = controll;
        this.usuarioLogado = new Usuario('', '', '');
    }
    LandingPage.prototype.ngOnInit = function () {
    };
    LandingPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.controll.checkUserAuth();
        this.auth.me().subscribe(function (response) { return _this.storage.setUser(response); });
        this.usuarioLogado = this.storage.getUser();
    };
    LandingPage = tslib_1.__decorate([
        Component({
            selector: 'app-landing',
            templateUrl: './landing.page.html',
            styleUrls: ['./landing.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, StorageService, ControllService])
    ], LandingPage);
    return LandingPage;
}());
export { LandingPage };
//# sourceMappingURL=landing.page.js.map