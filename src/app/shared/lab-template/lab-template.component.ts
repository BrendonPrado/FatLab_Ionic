import { Component, OnInit, Input } from '@angular/core';
import { Lab } from 'src/models/lab';
import { ReservaService } from 'src/service/domain/reserva.service';
import { Reserva } from 'src/models/reserva';

@Component({
  selector: 'app-lab-template',
  templateUrl: './lab-template.component.html',
  styleUrls: ['./lab-template.component.scss'],
})
export class LabTemplateComponent implements OnInit {

  showReservas = false;
  @Input() lab: Lab;

  constructor(private reservasService: ReservaService) { }

  ngOnInit() {}

  reservasOn() {
    this.showReservas = !this.showReservas;
  }


  reservasLab(id: string): Array<Reserva> {
    this.reservasService.reservasLab(id).subscribe(value => {
      this.lab.reservas = value;
    });
    return this.lab.reservas;
  }



}
