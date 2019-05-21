import { Component, OnInit, Input } from '@angular/core';
import { Lab } from 'src/models/lab';
import { ObjectEvent, Evento } from 'src/models/object-event';

@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.scss'],
})
export class LabListComponent implements OnInit {

  @Input() labs: Array<Lab>;

  constructor() { }

  ngOnInit() {}

  excluirLabDaList(retorno: ObjectEvent) {
    if (retorno.evento === Evento.DELETADO) {
        this.labs = this.labs.filter( lab => lab.id !== retorno.id);
      }
    }

}
