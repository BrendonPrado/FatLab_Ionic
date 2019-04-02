import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GerenciarLabPage } from './gerenciar-lab.page';
import { ReservasComponent } from '../shared/reservas/reservas.component';
import { SideMenuComponent } from '../shared/side-menu/side-menu.component';
import { SharedModule } from '../shared/shared.module';

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
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [GerenciarLabPage
   ]
})
export class GerenciarLabPageModule {}
