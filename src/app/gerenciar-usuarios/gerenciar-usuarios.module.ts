import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GerenciarUsuariosPage } from './gerenciar-usuarios.page';
import { SharedModule } from '../shared/shared.module';
import { AllUsuariosResolver } from 'src/guards/resolvers/all-usuarios.resolver';
import { UsuarioModule } from '../shared/usuario/usuario.module';

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
    RouterModule.forChild(routes),
    SharedModule,
    UsuarioModule
  ],
  providers: [AllUsuariosResolver],
  declarations: [GerenciarUsuariosPage]
})
export class GerenciarUsuariosPageModule {}
