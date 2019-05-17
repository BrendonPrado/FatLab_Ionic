import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LandingPage } from './landing.page';
import { SharedModule } from '../shared/shared.module';
var routes = [
    {
        path: '',
        component: LandingPage
    }
];
var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                SharedModule
            ],
            declarations: [LandingPage]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());
export { LandingPageModule };
//# sourceMappingURL=landing.module.js.map