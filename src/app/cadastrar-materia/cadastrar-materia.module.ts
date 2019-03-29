import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarMateriaPage } from './cadastrar-materia.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarMateriaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarMateriaPage]
})
export class CadastrarMateriaPageModule {}
