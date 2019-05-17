import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastrarMateriaPage } from './cadastrar-materia.page';
import { SharedModule } from '../shared/shared.module';
var routes = [
    {
        path: '',
        component: CadastrarMateriaPage
    }
];
var CadastrarMateriaPageModule = /** @class */ (function () {
    function CadastrarMateriaPageModule() {
    }
    CadastrarMateriaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                SharedModule
            ],
            declarations: [CadastrarMateriaPage]
        })
    ], CadastrarMateriaPageModule);
    return CadastrarMateriaPageModule;
}());
export { CadastrarMateriaPageModule };
//# sourceMappingURL=cadastrar-materia.module.js.map