import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var MateriaTemplateComponent = /** @class */ (function () {
    function MateriaTemplateComponent() {
        this.showReservas = false;
    }
    MateriaTemplateComponent.prototype.ngOnInit = function () {
    };
    MateriaTemplateComponent.prototype.reservasOn = function () {
        this.showReservas = !this.showReservas;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MateriaTemplateComponent.prototype, "materia", void 0);
    MateriaTemplateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-materia-template',
            templateUrl: './materia-template.component.html',
            styleUrls: ['./materia-template.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MateriaTemplateComponent);
    return MateriaTemplateComponent;
}());
export { MateriaTemplateComponent };
//# sourceMappingURL=materia-template.component.js.map