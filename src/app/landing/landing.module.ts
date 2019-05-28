import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LandingPage } from './landing.page';
import { SharedModule } from '../shared/shared.module';
import { AuthGuardService } from 'src/guards/canActivate/auth.guard';
import { UsuarioResolver } from 'src/guards/resolvers/usuario.resolver';
import {MatGridListModule} from '@angular/material/grid-list';

const routes: Routes = [
  {
    path: '',
    component: LandingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatGridListModule
  ],
  providers: [UsuarioResolver],
  declarations: [LandingPage]
})
export class LandingPageModule {}
