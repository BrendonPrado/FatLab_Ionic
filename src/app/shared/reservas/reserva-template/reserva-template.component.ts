import { Component, OnInit, Input } from '@angular/core';
import { Reserva } from 'src/models/reserva';

@Component({
  selector: 'app-reserva-template',
  templateUrl: './reserva-template.component.html',
  styleUrls: ['./reserva-template.component.scss'],
})
export class ReservaTemplateComponent implements OnInit {

  @Input() reserva: Reserva;
  constructor() { }

  ngOnInit() {}

}
