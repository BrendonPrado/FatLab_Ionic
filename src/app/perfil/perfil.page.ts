import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario';
import { StorageService } from 'src/service/storage.service';
import { AuthService } from 'src/service/auth.service';
import { ControllService } from 'src/service/controll.service';
import { SharingService } from 'src/service/sharing.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioNewDTO } from 'src/models/dto/usuario.new.dto';
import { UsuarioService } from 'src/service/domain/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuarioLogado: Usuario;
  campoSenha = 'password';
  editarOn = false;
  editarButtonText = 'Editar Informações';

  form: FormGroup;


  constructor(
    private sharing: SharingService,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.sharing.isUserLoggedIn.subscribe(value => {
      this.usuarioLogado = value;
    });

    this.form = this.formBuilder.group({
      nome: [this.usuarioLogado.nome, Validators.required],
      email: [this.usuarioLogado.email, Validators.email],
      senha: ['', ]
    });
  }

  mostraSenha() {
    this.campoSenha = (this.campoSenha === 'text') ? 'password' : 'text';
  }



  editarInfos() {
    this.editarOn = !this.editarOn;
    this.editarButtonText = (this.editarOn === false) ? 'Editar Informações' : 'Salvar Informações';
    if (this.editarOn === false) {
      if (this.form.get('senha').value) {
        const usuarioDTO: UsuarioNewDTO = {
          nome: this.form.get('nome').value,
          email: this.form.get('email').value,
          senha: this.form.get('senha').value
        };
        this.usuarioService.updateNewDTo(this.usuarioLogado.id, usuarioDTO).subscribe(() => {
          this.router.navigate(['/login']);
        }, error => this.editarOn = false);
      } else {
        const usuarioDTO: UsuarioNewDTO = {
          nome: this.form.get('nome').value,
          email: this.form.get('email').value
        };
        this.usuarioService.updateNewDTo(this.usuarioLogado.id, usuarioDTO).subscribe(() => {
          this.router.navigate(['/login']);
        }, error => this.editarOn = false);
      }

    }
  }
}
