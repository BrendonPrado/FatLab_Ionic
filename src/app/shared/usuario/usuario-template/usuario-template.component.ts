import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/models/usuario';
import { UsuarioService } from 'src/service/domain/usuario.service';
import { Aluno } from 'src/models/aluno';
import { Professor } from 'src/models/professor';
import { ObjectEvent, Evento } from 'src/models/object-event';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-usuario-template',
  templateUrl: './usuario-template.component.html',
  styleUrls: ['./usuario-template.component.scss'],
})
export class UsuarioTemplateComponent implements OnInit {

  @Input('usuario') usuarioPerfil: any;
  @Output() modificado = new EventEmitter<ObjectEvent>();


  campoSenha = 'password';
  editarOn = false;
  editarButtonText = 'Editar Informações';
  form: FormGroup;
  multiFuncao: boolean;
  tipo: string;

  constructor(public usuarioService: UsuarioService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.multiFuncao = this.usuarioPerfil.usuario.funcao.length > 1;



    this.tipo = (this.multiFuncao) ?
      this.usuarioPerfil.usuario.funcao.filter(func => func != 'Admin')[0] : this.usuarioPerfil.usuario.funcao[0];

    if (!this.usuarioPerfil.usuario.funcao.includes('Admin') || this.multiFuncao) {
      this.form = this.formBuilder.group({
        tipo: [this.tipo],
        admin: [this.multiFuncao],
        matricula: []
      });
      this.usuarioPerfil.usuario.funcao.includes('Aluno') ?
        this.form.get('matricula').setValue(this.usuarioPerfil.ra) :
        this.form.get('matricula').setValue(this.usuarioPerfil.matricula);

    }

  }

  mostraSenha() {
    this.campoSenha = (this.campoSenha === 'text') ? 'password' : 'text';
  }

  editarInfos() {
    this.editarOn = !this.editarOn;
    this.editarButtonText = (!this.editarOn) ? 'Editar Informações' : 'Salvar Informações';
    if (!this.editarOn) {
      this.usuarioService.update(this.usuarioPerfil.usuario.id, this.form.getRawValue()).subscribe();
    }
  }

  remove(id: string) {
    return this.usuarioService.delete(id).subscribe(() => {
      const event: ObjectEvent = { evento: Evento.DELETADO, id: this.usuarioPerfil.usuario.id };
      this.modificado.emit(event);
    });
  }


}
