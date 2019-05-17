import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MinhasMateriasPage } from './minhas-materias.page';
import { SharedModule } from '../shared/shared.module';
import { AlunoProfessorGuard } from 'src/guards/canActivate/aluno-professor.guard';
import { MinhasMateriasResolver } from 'src/guards/resolvers/minhas-materias.resolver';
import { MateriaModule } from '../shared/materia/materia.module';

const routes: Routes = [
  {
    path: '',
    component: MinhasMateriasPage
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
  providers: [MinhasMateriasResolver],
  declarations: [MinhasMateriasPage]
})
export class MinhasMateriasPageModule {}
