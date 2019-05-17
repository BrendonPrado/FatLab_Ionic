import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaTemplateComponent } from './reserva-template/reserva-template.component';
import { ReservasComponent } from './reservas.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'; 
import {MatExpansionModule} from '@angular/material/expansion'; 

@NgModule({
  declarations: [ReservaTemplateComponent, ReservasComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule
  ],
  exports: [ReservasComponent]
})
export class ReservasModule { }
