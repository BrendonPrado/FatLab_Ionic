import { Component, OnInit, Input } from '@angular/core';
import { Reserva } from 'src/models/reserva.model';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
})
export class ReservasComponent implements OnInit {

  @Input() reservas: Array<Reserva>;
  @Input() admin: boolean;
  constructor() { }

  ngOnInit() {

  }

  excluirReserva(id: string) {
    console.log(this.reservas);
    this.reservas = this.reservas.filter(reserva => reserva.id !== id);
  }
}
