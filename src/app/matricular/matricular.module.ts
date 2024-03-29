import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MatricularPage } from './matricular.page';
import { SharedModule } from '../shared/shared.module';
import { AlunoProfessorGuard } from 'src/guards/canActivate/aluno-professor.guard';

const routes: Routes = [
  {
    path: '',
    component: MatricularPage
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
  declarations: [MatricularPage]
})
export class MatricularPageModule {}
