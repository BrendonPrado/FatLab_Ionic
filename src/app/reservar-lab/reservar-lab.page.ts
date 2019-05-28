import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/models/materia';
import { ActivatedRoute, Router } from '@angular/router';

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
  materias: Materia[];

  constructor() { }

  ngOnInit() {
  }
}
