import { Component, OnInit } from '@angular/core';
import { ControllService } from 'src/service/controll.service';

@Component({
  selector: 'app-reservar-lab',
  templateUrl: './reservar-lab.page.html',
  styleUrls: ['./reservar-lab.page.scss'],
})
export class ReservarLabPage implements OnInit {
  tempo: string;
  materia: string;
  lab: string;
  tempoValue: string;
  tempoValueFim: string;
  num_aula: string;
  diasSemana: string;

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
  }

  UpdateVarTempo(event) {
    this.tempoValue = '';
    this.tempoValueFim = '';
    this.lab = '';
    this.num_aula = '';
    this.diasSemana = '';
    this.tempo = event.detail.value;
  }
}
