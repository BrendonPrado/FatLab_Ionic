import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/models/professor';
import { Materia } from 'src/models/materia';
import { Reserva } from 'src/models/reserva';
import { Lab } from 'src/models/lab';
import { ControllService } from 'src/service/controll.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gerenciar-materia',
  templateUrl: './gerenciar-materia.page.html',
  styleUrls: ['./gerenciar-materia.page.scss'],
})
export class GerenciarMateriaPage implements OnInit {

  materias = new Array<Materia>();
  reservasOn = new Array<string>();

  materiaAEditar: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ionViewWillEnter() {
  }


  editarOn(id: string) {
    if (id === this.materiaAEditar) {
      this.materiaAEditar = '';
    } else {
      this.materiaAEditar = id;

    }
  }

  ngOnInit(): void {
    this.materias = this.activatedRoute.snapshot.data['materias'];

  }

  excluirMateria(id: string) {

    this.materias = this.materias.filter(materia =>  materia.id !== id);
  }

  showReservasOn(id: string) {
    if (this.reservasOn.includes(id)) {
        this.reservasOn = this.reservasOn.filter(num => num !== id);
    } else {
        this.reservasOn.push(id);
    }
}

}
