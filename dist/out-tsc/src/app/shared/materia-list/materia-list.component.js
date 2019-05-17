import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var MateriaListComponent = /** @class */ (function () {
    function MateriaListComponent() {
    }
    MateriaListComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], MateriaListComponent.prototype, "materias", void 0);
    MateriaListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-materia-list',
            templateUrl: './materia-list.component.html',
            styleUrls: ['./materia-list.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MateriaListComponent);
    return MateriaListComponent;
}());
export { MateriaListComponent };
//# sourceMappingURL=materia-list.component.js.map