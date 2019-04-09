import { Component, OnInit } from '@angular/core';
import { UsuarioDTO } from 'src/models/dto/usuario.dto';
import { UsuarioService } from 'src/service/usuario.service';

@Component({
  selector: 'app-cadastrar-novo-usuario',
  templateUrl: './cadastrar-novo-usuario.page.html',
  styleUrls: ['./cadastrar-novo-usuario.page.scss'],
})
export class CadastrarNovoUsuarioPage implements OnInit {

  usuario: UsuarioDTO;
  constructor(private service: UsuarioService) { }

  ngOnInit() {
  this.usuario = {
     admin: false,
     matricula: '',
     tipo: ''
    };
  }

  save() {
    let abc;

    this.service.saveDTO(this.usuario).subscribe(response => {
      abc = response;
      this.usuario = {
        admin: false,
        matricula: '',
        tipo: ''
       };
       alert("usuário cadastrado com sucesso");
    },error => alert(error.message));
    console.log(abc);
  }


}
