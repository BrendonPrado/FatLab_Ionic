import { Component, OnInit, Input } from '@angular/core';
import { Materia } from 'src/models/materia.model';

@Component({
  selector: 'app-materia-template',
  templateUrl: './materia-template.component.html',
  styleUrls: ['./materia-template.component.scss'],
})
export class MateriaTemplateComponent implements OnInit {

  showReservas: boolean = false;

  @Input() materia: Materia;

  constructor() { }

  ngOnInit() {
  }

  reservasOn() {
    this.showReservas = !this.showReservas;
  }

}
