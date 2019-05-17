import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReservarLabPage } from './reservar-lab.page';
import { SharedModule } from '../shared/shared.module';
var routes = [
    {
        path: '',
        component: ReservarLabPage
    }
];
var ReservarLabPageModule = /** @class */ (function () {
    function ReservarLabPageModule() {
    }
    ReservarLabPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                SharedModule
            ],
            declarations: [ReservarLabPage]
        })
    ], ReservarLabPageModule);
    return ReservarLabPageModule;
}());
export { ReservarLabPageModule };
//# sourceMappingURL=reservar-lab.module.js.map