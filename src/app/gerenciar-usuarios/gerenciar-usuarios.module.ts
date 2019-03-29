import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GerenciarUsuariosPage } from './gerenciar-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciarUsuariosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GerenciarUsuariosPage]
})
export class GerenciarUsuariosPageModule {}
