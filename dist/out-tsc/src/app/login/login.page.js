import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/service/auth.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/service/storage.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(menu, authService, router, storageService) {
        this.menu = menu;
        this.authService = authService;
        this.router = router;
        this.storageService = storageService;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.creds = {
            email: '',
            senha: ''
        };
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menu.enable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menu.enable(true);
    };
    LoginPage.prototype.autenticar = function () {
        var _this = this;
        console.log('jnvhinnv');
        this.authService.authenticate(this.creds).subscribe(function (response) {
            _this.authService.succesfulLogin(response.headers.get('Authorization'));
            _this.router.navigate(['/landing']);
        }, function (error) { return console.log(error); });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: 'login.page.html',
            styleUrls: ['login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [MenuController,
            AuthService,
            Router,
            StorageService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map