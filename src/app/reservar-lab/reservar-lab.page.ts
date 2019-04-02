import { Component, OnInit } from '@angular/core';

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

  UpdateVarTempo(event){
    this.tempoValue = '';
    this.tempoValueFim = '';
    this.tempo = event.detail.value;
  }

}
