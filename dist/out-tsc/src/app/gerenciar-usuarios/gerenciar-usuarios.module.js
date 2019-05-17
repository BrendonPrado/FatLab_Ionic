import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GerenciarUsuariosPage } from './gerenciar-usuarios.page';
import { SharedModule } from '../shared/shared.module';
var routes = [
    {
        path: '',
        component: GerenciarUsuariosPage
    }
];
var GerenciarUsuariosPageModule = /** @class */ (function () {
    function GerenciarUsuariosPageModule() {
    }
    GerenciarUsuariosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                SharedModule
            ],
            declarations: [GerenciarUsuariosPage]
        })
    ], GerenciarUsuariosPageModule);
    return GerenciarUsuariosPageModule;
}());
export { GerenciarUsuariosPageModule };
//# sourceMappingURL=gerenciar-usuarios.module.js.map