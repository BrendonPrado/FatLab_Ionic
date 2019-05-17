import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MinhasMateriasPage } from './minhas-materias.page';
import { SharedModule } from '../shared/shared.module';
var routes = [
    {
        path: '',
        component: MinhasMateriasPage
    }
];
var MinhasMateriasPageModule = /** @class */ (function () {
    function MinhasMateriasPageModule() {
    }
    MinhasMateriasPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                SharedModule
            ],
            declarations: [MinhasMateriasPage]
        })
    ], MinhasMateriasPageModule);
    return MinhasMateriasPageModule;
}());
export { MinhasMateriasPageModule };
//# sourceMappingURL=minhas-materias.module.js.map