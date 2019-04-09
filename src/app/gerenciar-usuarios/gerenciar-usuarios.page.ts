import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/models/aluno';
import { Lab } from 'src/models/lab';
import { Materia } from 'src/models/materia';
import { Professor } from 'src/models/professor';
import { Reserva } from 'src/models/reserva';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'app-gerenciar-usuarios',
  templateUrl: './gerenciar-usuarios.page.html',
  styleUrls: ['./gerenciar-usuarios.page.scss'],
})
export class GerenciarUsuariosPage implements OnInit {

  usuarios: Array<Usuario> = new Array<Usuario>();
  constructor() { }

  ngOnInit() {

    const professor: Professor = new Professor( '1',
     'Joao Batata',
    'jbatata@g.com',
    'batata',
     false,
     '28772398327', new Array <Materia>());

     const aluno: Aluno = new Aluno( '1',
     'Batata',
    'batata@b.com',
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

    professor.materias.push(materia1);
    aluno.materias.push(materia1);

    this.usuarios.push(aluno, professor);
  }

  isAluno(usuario: Usuario): boolean {
    return usuario instanceof Aluno;
  }

  removerUsuario(id: string) {
    this.usuarios = this.usuarios.filter(user => user.id !== id);
  }

}
