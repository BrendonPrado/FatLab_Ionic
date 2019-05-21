import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabListComponent } from './lab-list/lab-list.component';
import { LabTemplateComponent } from './lab-template/lab-template.component';
import { IonicModule } from '@ionic/angular';
import { ReservasModule } from '../reservas/reservas.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LabListComponent, LabTemplateComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReservasModule,
    ReactiveFormsModule
  ],
  exports: [LabListComponent]
})
export class LabModule { }
