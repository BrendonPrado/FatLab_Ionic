import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ReservaService } from 'src/service/domain/reserva.service';
import { LabTemplateComponent } from './lab-template/lab-template.component';
import { LabListComponent } from './lab-list/lab-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SideMenuComponent,
    LabTemplateComponent,
    LabListComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ReservaService],
  exports: [
    SideMenuComponent,
    LabTemplateComponent,
    LabListComponent,
  ]
})
export class SharedModule { }
