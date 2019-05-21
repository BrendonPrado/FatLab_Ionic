import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/models/usuario';
import { ObjectEvent, Evento } from 'src/models/object-event';
import { SharingService } from 'src/service/sharing.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss'],
})
export class UsuarioListComponent implements OnInit {

  @Input() usuarios: Array<any>;
  @Input() admin: boolean;


  constructor(private sharingService: SharingService) { }

  ngOnInit() {
    let meuUsuario;
    this.sharingService.isUserLoggedIn.subscribe(usuario => meuUsuario = usuario );
    this.usuarios = this.usuarios.filter(usuarioPerfil => usuarioPerfil.usuario.id != meuUsuario.id);
  }

  excluirUsuarioDaList(retorno: ObjectEvent) {
    if (retorno.evento === Evento.DELETADO) {
        this.usuarios = this.usuarios.filter( usuarioLoop => usuarioLoop.usuario.id !== retorno.id);
      }
    }
}
