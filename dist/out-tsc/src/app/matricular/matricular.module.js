import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MatricularPage } from './matricular.page';
import { SharedModule } from '../shared/shared.module';
var routes = [
    {
        path: '',
        component: MatricularPage
    }
];
var MatricularPageModule = /** @class */ (function () {
    function MatricularPageModule() {
    }
    MatricularPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                SharedModule
            ],
            declarations: [MatricularPage]
        })
    ], MatricularPageModule);
    return MatricularPageModule;
}());
export { MatricularPageModule };
//# sourceMappingURL=matricular.module.js.map