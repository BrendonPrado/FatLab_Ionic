import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VMessageComponent } from './v-message.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [VMessageComponent],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [VMessageComponent]
})
export class VMessageModule { }
