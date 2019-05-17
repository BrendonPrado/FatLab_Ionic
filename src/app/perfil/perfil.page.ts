import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario';
import { StorageService } from 'src/service/storage.service';
import { AuthService } from 'src/service/auth.service';
import { ControllService } from 'src/service/controll.service';
import { SharingService } from 'src/service/sharing.service';

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
  constructor(private sharing: SharingService ) {
    this.sharing.isUserLoggedIn.subscribe(value => {
      this.usuarioLogado = value;
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
  }

  mostraSenha() {
    this.campoSenha = (this.campoSenha === 'text') ? 'password' : 'text';
  }



  editarInfos() {
    this.editarOn = (this.editarOn === true ) ? false : true;
    this.editarButtonText = (this.editarOn === true ) ? 'Editar Informações' : 'Salvar Informações';

  }

}
