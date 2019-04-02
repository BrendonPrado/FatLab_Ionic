import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-materia',
  templateUrl: './cadastrar-materia.page.html',
  styleUrls: ['./cadastrar-materia.page.scss'],
})
export class CadastrarMateriaPage implements OnInit {
  nomeMateria: string;

  constructor() { }

  ngOnInit() {
  }

}
