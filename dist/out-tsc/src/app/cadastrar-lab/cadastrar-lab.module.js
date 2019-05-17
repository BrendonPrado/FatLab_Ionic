import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastrarLabPage } from './cadastrar-lab.page';
import { SharedModule } from '../shared/shared.module';
var routes = [
    {
        path: '',
        component: CadastrarLabPage
    }
];
var CadastrarLabPageModule = /** @class */ (function () {
    function CadastrarLabPageModule() {
    }
    CadastrarLabPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                SharedModule
            ],
            declarations: [
                CadastrarLabPage
            ]
        })
    ], CadastrarLabPageModule);
    return CadastrarLabPageModule;
}());
export { CadastrarLabPageModule };
//# sourceMappingURL=cadastrar-lab.module.js.map