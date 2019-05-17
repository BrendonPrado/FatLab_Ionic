import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Materia } from 'src/models/materia';
import { SharingService } from 'src/service/sharing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-minhas-materias',
  templateUrl: './minhas-materias.page.html',
  styleUrls: ['./minhas-materias.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MinhasMateriasPage implements OnInit {
  materiasUsuario: Array<Materia>;


  constructor(private activatedRoute: ActivatedRoute) {
    this.materiasUsuario = this.activatedRoute.snapshot.data['materias'];
   }

  ngOnInit() {
  }



}
