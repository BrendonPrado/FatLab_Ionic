import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReservarLabPage } from './reservar-lab.page';
import { SharedModule } from '../shared/shared.module';
import { ProfessorGuard } from 'src/guards/canActivate/professor.guard';
import { ReservarDiaComponent } from './reservar-dia/reservar-dia.component';
import { ReservarMesComponent } from './reservar-mes/reservar-mes.component';
import { VMessageModule } from '../shared/v-message/v-message.module';
import { MinhasMateriasResolver } from 'src/guards/resolvers/minhas-materias.resolver';

const routes: Routes = [
  {
    path: '',
    component: ReservarLabPage,
    children: [
      {
        path: 'dia',
        component: ReservarDiaComponent,
        resolve: {
          materias: MinhasMateriasResolver
        }
      },
      {
        path: '',
        redirectTo: 'dia',
        pathMatch: 'full'
      },
      {
        path: 'mes',
        component: ReservarMesComponent,
        resolve: {
          materias: MinhasMateriasResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    VMessageModule
  ],
  providers: [ProfessorGuard],
  declarations: [ReservarLabPage, ReservarDiaComponent, ReservarMesComponent]
})
export class ReservarLabPageModule {}
