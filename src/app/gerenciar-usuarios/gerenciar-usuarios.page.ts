import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario';
import { UsuarioService } from 'src/service/domain/usuario.service';
import { ControllService } from 'src/service/controll.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gerenciar-usuarios',
  templateUrl: './gerenciar-usuarios.page.html',
  styleUrls: ['./gerenciar-usuarios.page.scss'],
})
export class GerenciarUsuariosPage implements OnInit {

  usuarios: Array<any>;
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ionViewWillEnter() {
  }

  ngOnInit() {
    this.usuarios = this.activatedRoute.snapshot.data['usuarios'];
  }
}
