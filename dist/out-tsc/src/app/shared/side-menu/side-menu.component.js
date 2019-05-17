import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent() {
    }
    SideMenuComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SideMenuComponent.prototype, "titulo", void 0);
    SideMenuComponent = tslib_1.__decorate([
        Component({
            selector: 'app-side-menu',
            templateUrl: './side-menu.component.html',
            styleUrls: ['./side-menu.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SideMenuComponent);
    return SideMenuComponent;
}());
export { SideMenuComponent };
//# sourceMappingURL=side-menu.component.js.map