import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControllService } from 'src/service/controll.service';
var ReservarLabPage = /** @class */ (function () {
    function ReservarLabPage(controll) {
        this.controll = controll;
    }
    ReservarLabPage.prototype.ngOnInit = function () {
    };
    ReservarLabPage.prototype.ionViewWillEnter = function () {
        this.controll.checkProfessorAuth();
    };
    ReservarLabPage.prototype.UpdateVarTempo = function (event) {
        this.tempoValue = '';
        this.tempoValueFim = '';
        this.lab = '';
        this.num_aula = '';
        this.diasSemana = '';
        this.tempo = event.detail.value;
    };
    ReservarLabPage = tslib_1.__decorate([
        Component({
            selector: 'app-reservar-lab',
            templateUrl: './reservar-lab.page.html',
            styleUrls: ['./reservar-lab.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ControllService])
    ], ReservarLabPage);
    return ReservarLabPage;
}());
export { ReservarLabPage };
//# sourceMappingURL=reservar-lab.page.js.map