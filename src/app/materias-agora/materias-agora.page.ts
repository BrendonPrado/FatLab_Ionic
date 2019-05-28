import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/models/materia';
import { Professor } from 'src/models/professor';
import { Reserva } from 'src/models/reserva';
import { Lab } from 'src/models/lab';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materias-agora',
  templateUrl: './materias-agora.page.html',
  styleUrls: ['./materias-agora.page.scss'],
})
export class MateriasAgoraPage implements OnInit {

  materia: Materia;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.materia = this.activatedRoute.snapshot.data['materia'];
  }

}
