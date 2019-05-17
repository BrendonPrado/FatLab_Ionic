import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ReservasComponent } from './reservas/reservas.component';
import { MateriaTemplateComponent } from './materia-template/materia-template.component';
import { MateriaListComponent } from './materia-list/materia-list.component';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                SideMenuComponent,
                ReservasComponent,
                MateriaTemplateComponent,
                MateriaListComponent
            ],
            imports: [
                CommonModule,
                IonicModule
            ],
            exports: [
                SideMenuComponent,
                ReservasComponent,
                MateriaTemplateComponent,
                MateriaListComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map