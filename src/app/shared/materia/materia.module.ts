import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateriaListComponent } from './materia-list/materia-list.component';
import { MateriaTemplateComponent } from './materia-template/materia-template.component';
import { IonicModule } from '@ionic/angular';
import { ReservasModule } from '../reservas/reservas.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MateriaListComponent, MateriaTemplateComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReservasModule,
    ReactiveFormsModule
  ],
  exports: [ MateriaListComponent, MateriaTemplateComponent]
})
export class MateriaModule { }
