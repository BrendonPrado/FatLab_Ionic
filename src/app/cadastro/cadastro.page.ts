import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import { UsuarioNewDTO } from 'src/models/dto/usuario.new.dto';
import { UsuarioService } from 'src/service/domain/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private menu: MenuController, private usuarioService: UsuarioService) { }

  usuario: UsuarioNewDTO;
  ngOnInit() {
    this.usuario = {
      email: '',
      matricula: '',
      nome: '',
      senha: ''
    };
  }


  ionViewWillEnter() {
    this.menu.enable(false);
  }

  save() {
    this.usuarioService.saveNewDTO(this.usuario).subscribe( response => {
      this.usuario = {
        email: '',
        matricula: '',
        nome: '',
        senha: ''
      };
    });
  }

}
