import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ReservasComponent } from './reservas/reservas.component';
import {MateriaTemplateComponent} from './materia-template/materia-template.component';
import {MateriaListComponent} from './materia-list/materia-list.component';

@NgModule({
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
export class SharedModule { }
