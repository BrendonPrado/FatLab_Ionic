import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioTemplateComponent } from './usuario-template/usuario-template.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../v-message/v-message.module';

@NgModule({
  declarations: [UsuarioListComponent, UsuarioTemplateComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule
  ], exports: [UsuarioListComponent, UsuarioTemplateComponent]
})
export class UsuarioModule { }
