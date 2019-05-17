import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControllService } from 'src/service/controll.service';
var MatricularPage = /** @class */ (function () {
    function MatricularPage(controll) {
        this.controll = controll;
    }
    MatricularPage.prototype.ngOnInit = function () {
    };
    MatricularPage.prototype.ionViewWillEnter = function () {
        this.controll.checkProfessorAlunoAuth();
    };
    MatricularPage = tslib_1.__decorate([
        Component({
            selector: 'app-matricular',
            templateUrl: './matricular.page.html',
            styleUrls: ['./matricular.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ControllService])
    ], MatricularPage);
    return MatricularPage;
}());
export { MatricularPage };
//# sourceMappingURL=matricular.page.js.map