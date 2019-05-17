import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastrarNovoUsuarioPage } from './cadastrar-novo-usuario.page';
import { SharedModule } from '../shared/shared.module';
var routes = [
    {
        path: '',
        component: CadastrarNovoUsuarioPage
    }
];
var CadastrarNovoUsuarioPageModule = /** @class */ (function () {
    function CadastrarNovoUsuarioPageModule() {
    }
    CadastrarNovoUsuarioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                SharedModule
            ],
            declarations: [CadastrarNovoUsuarioPage]
        })
    ], CadastrarNovoUsuarioPageModule);
    return CadastrarNovoUsuarioPageModule;
}());
export { CadastrarNovoUsuarioPageModule };
//# sourceMappingURL=cadastrar-novo-usuario.module.js.map