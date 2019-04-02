import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Lab} from "../../models/lab.model";
import {Reserva} from "../../models/reserva.model";
import {Materia} from "../../models/materia.model";
import {Professor} from "../../models/professor.model";

@Component({
  selector: 'app-gerenciar-lab',
  templateUrl: './gerenciar-lab.page.html',
  styleUrls: ['./gerenciar-lab.page.scss'],
})
export class GerenciarLabPage implements OnInit {

  labs:Array<Lab> = new Array<Lab>();
  labAEditar: string;
  reservasOn: Array<string> =new Array<string>();




  constructor() { }

  ngOnInit() {
    const professor:Professor = {
      id: '1',
      nome : 'Joao Batata',
      email: 'jbatata@g.com',
      senha: 'batata',
      admin:false,
      materias: new Array<Materia>(),
      matricula:'28772398327'
    };

    const materia1:Materia = {
      id:'1',
      nome:'Algoritmos',
      professor:professor,
      reservas:new Array<Reserva>(),
    };


    const lab1:Lab ={
      id:'1',
      numero:'301',
      reservas: new Array<Reserva>()
    };

    const lab2:Lab ={
      id:'2',
      numero:'200',
      reservas: new Array<Reserva>()
    };

    const reserva1:Reserva = {
      id:'1',
      horarioComeco : new Date(),
      horarioFim:new Date(),
      dia:new Date(),
      materia: materia1,
      lab: lab1
    };

    const reserva2:Reserva = {
      id:'2',
      horarioComeco : new Date(),
      horarioFim:new Date(),
      dia:new Date(),
      materia: materia1,
      lab: lab2
    };


    lab2.reservas.push(reserva2);
    lab1.reservas.push(reserva1,reserva2);

    this.labs.push(lab1);
    this.labs.push(lab2);
  }

  editarOn(numero:string,evento) {
    if(numero==this.labAEditar){
      this.labAEditar = '0';
    }else {
      this.labAEditar = numero;

    }
  }

  excluirLab(numero: string) {

    this.labs = this.labs.filter(lab =>  lab.numero !== numero);
  }

    showReservasOn(numero: string) {
        if(this.reservasOn.includes(numero)){
            this.reservasOn = this.reservasOn.filter(num => num !== numero);
        }else{
            this.reservasOn.push(numero);
        }
    }
}
