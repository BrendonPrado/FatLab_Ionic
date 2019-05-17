import { Component, OnInit, Input } from '@angular/core';
import { Materia } from 'src/models/materia';
import { ReservaService } from 'src/service/domain/reserva.service';
import { Subject, Observable } from 'rxjs';
import { Reserva } from 'src/models/reserva';

@Component({
  selector: 'app-materia-template',
  templateUrl: './materia-template.component.html',
  styleUrls: ['./materia-template.component.scss'],
})
export class MateriaTemplateComponent implements OnInit {

  showReservas = false;


  @Input() materia: Materia;

  constructor(private reservasService: ReservaService) { }

  ngOnInit() {
  }

  reservasOn() {
    this.showReservas = !this.showReservas;
  }



}
