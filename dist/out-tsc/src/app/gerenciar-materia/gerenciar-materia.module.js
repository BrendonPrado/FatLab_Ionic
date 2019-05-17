import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GerenciarMateriaPage } from './gerenciar-materia.page';
import { SharedModule } from '../shared/shared.module';
var routes = [
    {
        path: '',
        component: GerenciarMateriaPage
    }
];
var GerenciarMateriaPageModule = /** @class */ (function () {
    function GerenciarMateriaPageModule() {
    }
    GerenciarMateriaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                SharedModule
            ],
            declarations: [GerenciarMateriaPage]
        })
    ], GerenciarMateriaPageModule);
    return GerenciarMateriaPageModule;
}());
export { GerenciarMateriaPageModule };
//# sourceMappingURL=gerenciar-materia.module.js.map