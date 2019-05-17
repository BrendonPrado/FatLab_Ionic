import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GerenciarMateriaPage } from './gerenciar-materia.page';
import { SharedModule } from '../shared/shared.module';
import { ReservasModule } from '../shared/reservas/reservas.module';
import { MateriaModule } from '../shared/materia/materia.module';

const routes: Routes = [
  {
    path: '',
    component: GerenciarMateriaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReservasModule,
    MateriaModule
  ],
  declarations: [GerenciarMateriaPage]
})
export class GerenciarMateriaPageModule {}
