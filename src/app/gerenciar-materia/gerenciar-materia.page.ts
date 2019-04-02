import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/models/professor.model';
import { Materia } from 'src/models/materia.model';
import { Reserva } from 'src/models/reserva.model';
import { Lab } from 'src/models/lab.model';

@Component({
  selector: 'app-gerenciar-materia',
  templateUrl: './gerenciar-materia.page.html',
  styleUrls: ['./gerenciar-materia.page.scss'],
})
export class GerenciarMateriaPage implements OnInit {

  materias:Array<Materia> = new Array<Materia>();
  reservasOn: Array<string> = new Array<string>();

  materiaAEditar:string;

  constructor() { }

  ngOnInit() {
    const professor: Professor = {
      id: '1',
      nome : 'Joao Batata',
      email: 'jbatata@g.com',
      senha: 'batata',
      materias: new Array<Materia>(),
      matricula: '28772398327'
    };

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
      id:'2',
      horarioComeco : new Date(),
      horarioFim: new Date(),
      dia: new Date(),
      materia: materia1,
      lab: lab2
    };


    lab2.reservas.push(reserva2);
    lab1.reservas.push(reserva1);
    materia1.reservas.push(reserva1, reserva2);
    this.materias.push(materia1);
  }

  editarOn(id:string) {
    if(id===this.materiaAEditar){
      this.materiaAEditar = '';
    }else {
      this.materiaAEditar = id;

    }
  }

  excluirMateria(id: string) {

    this.materias = this.materias.filter(materia =>  materia.id !== id);
  }

  showReservasOn(id: string) {
    if(this.reservasOn.includes(id)){
        this.reservasOn = this.reservasOn.filter(num => num !== id);
    }else{
        this.reservasOn.push(id);
    }
}

}
