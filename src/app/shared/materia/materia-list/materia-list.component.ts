import { Component, OnInit, Input } from '@angular/core';
import { Materia } from 'src/models/materia';
import { ObjectEvent, Evento } from 'src/models/object-event';

@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.scss'],
})
export class MateriaListComponent implements OnInit {
  @Input() materias: Array<Materia>;


  constructor() { }

  ngOnInit() {}

  excluirMateria(retorno: ObjectEvent) {
    if (retorno.evento === Evento.DELETADO) {
        this.materias = this.materias.filter( materia => materia.id !== retorno.id);
      }
    }

}
