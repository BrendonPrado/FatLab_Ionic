import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario';
import { Materia } from 'src/models/materia';
import { Professor } from 'src/models/professor';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuarioLogado: Usuario;
  campoSenha = 'password';
  editarOn = true;
  editarButtonText = 'Editar Informações';
  constructor() { }

  ngOnInit() {
    const user: Professor = new Professor( '1',
     'Joao Batata',
    'jbatata@g.com',
    'batata',
     false,
     '28772398327', new Array <Materia>());
    this.usuarioLogado = user;

  }

  mostraSenha() {
    this.campoSenha = (this.campoSenha === 'text') ? 'password' : 'text';
  }


  editarInfos() {
    this.editarOn = (this.editarOn === true ) ? false : true;
    this.editarButtonText = (this.editarOn === true ) ? 'Editar Informações' : 'Salvar Informações';

  }

}
