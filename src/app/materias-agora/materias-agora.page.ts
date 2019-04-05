import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/models/materia.model';
import { Professor } from 'src/models/professor.model';
import { Reserva } from 'src/models/reserva.model';
import { Lab } from 'src/models/lab.model';

@Component({
  selector: 'app-materias-agora',
  templateUrl: './materias-agora.page.html',
  styleUrls: ['./materias-agora.page.scss'],
})
export class MateriasAgoraPage implements OnInit {

  materiaAgora: Materia;
  constructor() { }

  ngOnInit() {
    const professor: Professor = new Professor( '1',
     'Joao Batata',
    'jbatata@g.com',
    'batata',
     false,
     '28772398327', new Array <Materia>());

    const materia1: Materia = {
      id: '1',
      nome: 'Algoritmos',
      professor: professor,
      reservas: new Array<Reserva>(),
    };


    const lab1: Lab = {
      id: '1',
      numero: '301',
      reservas: new Array<Reserva>()
    };

    const lab2: Lab = {
      id: '2',
      numero: '200',
      reservas: new Array<Reserva>()
    };

    const reserva1: Reserva = {
      id: '1',
      horarioComeco : new Date(),
      horarioFim: new Date(),
      dia: new Date(),
      materia: materia1,
      lab: lab1
    };

    const reserva2: Reserva = {
      id: '2',
      horarioComeco : new Date(),
      horarioFim: new Date(),
      dia: new Date(),
      materia: materia1,
      lab: lab2
    };


    lab2.reservas.push(reserva2);
    lab1.reservas.push(reserva1, reserva2);

    materia1.reservas.push(reserva1, reserva2);

    this.materiaAgora = materia1;
  }

}
