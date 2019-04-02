import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ReservasComponent } from './reservas/reservas.component';

@NgModule({
  declarations: [
    SideMenuComponent,
    ReservasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    SideMenuComponent,
    ReservasComponent
  ]
})
export class SharedModule { }
