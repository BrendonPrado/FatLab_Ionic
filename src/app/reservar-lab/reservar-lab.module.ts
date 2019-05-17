import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReservarLabPage } from './reservar-lab.page';
import { SharedModule } from '../shared/shared.module';
import { ProfessorGuard } from 'src/guards/canActivate/professor.guard';

const routes: Routes = [
  {
    path: '',
    component: ReservarLabPage
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
  providers: [ProfessorGuard],
  declarations: [ReservarLabPage]
})
export class ReservarLabPageModule {}
