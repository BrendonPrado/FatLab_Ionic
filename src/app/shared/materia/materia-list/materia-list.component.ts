import { Component, OnInit, Input } from '@angular/core';
import { Materia } from 'src/models/materia';

@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.scss'],
})
export class MateriaListComponent implements OnInit {
  @Input() materias: Array<Materia>;


  constructor() { }

  ngOnInit() {}

}
