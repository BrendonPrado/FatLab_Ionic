import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var ReservasComponent = /** @class */ (function () {
    function ReservasComponent() {
    }
    ReservasComponent.prototype.ngOnInit = function () {
    };
    ReservasComponent.prototype.excluirReserva = function (id) {
        console.log(this.reservas);
        this.reservas = this.reservas.filter(function (reserva) { return reserva.id !== id; });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], ReservasComponent.prototype, "reservas", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ReservasComponent.prototype, "admin", void 0);
    ReservasComponent = tslib_1.__decorate([
        Component({
            selector: 'app-reservas',
            templateUrl: './reservas.component.html',
            styleUrls: ['./reservas.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ReservasComponent);
    return ReservasComponent;
}());
export { ReservasComponent };
//# sourceMappingURL=reservas.component.js.map