import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GerenciarLabPage } from './gerenciar-lab.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciarLabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GerenciarLabPage]
})
export class GerenciarLabPageModule {}
