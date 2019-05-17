import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GerenciarLabPage } from './gerenciar-lab.page';
import { SharedModule } from '../shared/shared.module';
var routes = [
    {
        path: '',
        component: GerenciarLabPage
    }
];
var GerenciarLabPageModule = /** @class */ (function () {
    function GerenciarLabPageModule() {
    }
    GerenciarLabPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                SharedModule
            ],
            declarations: [GerenciarLabPage
            ]
        })
    ], GerenciarLabPageModule);
    return GerenciarLabPageModule;
}());
export { GerenciarLabPageModule };
//# sourceMappingURL=gerenciar-lab.module.js.map