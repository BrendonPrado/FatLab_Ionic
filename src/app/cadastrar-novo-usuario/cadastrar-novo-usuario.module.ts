import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarNovoUsuarioPage } from './cadastrar-novo-usuario.page';
import { SharedModule } from '../shared/shared.module';
import { VMessageComponent } from '../shared/v-message/v-message.component';
import { VMessageModule } from '../shared/v-message/v-message.module';

import {MatSelectModule} from '@angular/material/select';

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
    RouterModule.forChild(routes),
    SharedModule,
    VMessageModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  declarations: [CadastrarNovoUsuarioPage]
})
export class CadastrarNovoUsuarioPageModule {}
