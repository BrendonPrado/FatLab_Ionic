import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarNovoUsuarioPage } from './cadastrar-novo-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarNovoUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarNovoUsuarioPage]
})
export class CadastrarNovoUsuarioPageModule {}
