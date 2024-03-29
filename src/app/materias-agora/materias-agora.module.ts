import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MateriasAgoraPage } from './materias-agora.page';
import { SharedModule } from '../shared/shared.module';
import { MateriaModule } from '../shared/materia/materia.module';

const routes: Routes = [
  {
    path: '',
    component: MateriasAgoraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    MateriaModule
  ],
  declarations: [MateriasAgoraPage]
})
export class MateriasAgoraPageModule {}
