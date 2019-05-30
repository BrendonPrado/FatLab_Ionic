import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LoadingModule } from 'src/interceptors/loading/loading.module';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    LoadingModule
  ],
  exports: [
    SideMenuComponent,
  ]
})
export class SharedModule { }
