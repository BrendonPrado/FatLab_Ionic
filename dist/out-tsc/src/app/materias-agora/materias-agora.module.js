import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MateriasAgoraPage } from './materias-agora.page';
import { SharedModule } from '../shared/shared.module';
var routes = [
    {
        path: '',
        component: MateriasAgoraPage
    }
];
var MateriasAgoraPageModule = /** @class */ (function () {
    function MateriasAgoraPageModule() {
    }
    MateriasAgoraPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                SharedModule
            ],
            declarations: [MateriasAgoraPage]
        })
    ], MateriasAgoraPageModule);
    return MateriasAgoraPageModule;
}());
export { MateriasAgoraPageModule };
//# sourceMappingURL=materias-agora.module.js.map