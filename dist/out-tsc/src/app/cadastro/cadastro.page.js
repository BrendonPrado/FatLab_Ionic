import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MenuController } from "@ionic/angular";
var CadastroPage = /** @class */ (function () {
    function CadastroPage(menu) {
        this.menu = menu;
    }
    CadastroPage.prototype.ngOnInit = function () {
    };
    CadastroPage.prototype.ionViewWillEnter = function () {
        this.menu.enable(false);
    };
    CadastroPage.prototype.ionViewWillLeave = function () {
        this.menu.enable(true);
    };
    CadastroPage = tslib_1.__decorate([
        Component({
            selector: 'app-cadastro',
            templateUrl: './cadastro.page.html',
            styleUrls: ['./cadastro.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [MenuController])
    ], CadastroPage);
    return CadastroPage;
}());
export { CadastroPage };
//# sourceMappingURL=cadastro.page.js.map