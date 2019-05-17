import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MenuController } from "@ionic/angular";
var HomePage = /** @class */ (function () {
    function HomePage(menu) {
        this.menu = menu;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.menu.enable(false);
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.menu.enable(true);
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [MenuController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map