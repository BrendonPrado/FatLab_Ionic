import { Component, OnInit } from '@angular/core';
import { UsuarioDTO } from 'src/models/dto/usuario.dto';
import { UsuarioService } from 'src/service/domain/usuario.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NovoAdminValidator } from './novo-admin.validator';

@Component({
  selector: 'app-cadastrar-novo-usuario',
  templateUrl: './cadastrar-novo-usuario.page.html',
  styleUrls: ['./cadastrar-novo-usuario.page.scss'],
})
export class CadastrarNovoUsuarioPage implements OnInit {

  tipo = '' ;
  form: FormGroup;

  constructor(private service: UsuarioService,
    private formBuilder: FormBuilder) { }

  ionViewWillEnter() {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [''],
      email: [''],
      senha: [''],
      tipo: [''],
      matricula: [''],
      admin: [false]
    }, NovoAdminValidator);

  }

  save() {

    if (this.tipo !== 'Admin') {
      this.form.get('tipo').setValue(this.tipo);
      const usuario: UsuarioDTO = this.form.getRawValue();
      this.service.saveDTO(usuario).subscribe( () => {
        this.tipo = ' ';
        this.limpaOutrosCampos();
      });
      } else {
        const usuario = this.form.getRawValue();
        this.service.saveAdmin(usuario).subscribe(  () => {
           this.tipo = '';
           this.limpaOutrosCampos();
          });
      }
  }

  limpaOutrosCampos() {
    if (this.tipo === 'Admin') {
      this.setAdminValidators();
    } else {
      this.setAlunoProfValidator();
    }
  }

  setAdminValidators() {
    this.form.get('matricula').setValidators(null);

    this.form.get('admin').setValue(null);
    this.form.get('matricula').setValue(null);

    this.form.get('email').setValidators(Validators.email);
    this.form.get('senha').setValidators([Validators.minLength(3), Validators.maxLength(20)]);
  }

  setAlunoProfValidator() {
    this.form.get('email').setValidators(null);
    this.form.get('senha').setValidators(null);

    this.form.get('email').setValue(null);
    this.form.get('senha').setValue(null);

    this.form.get('matricula').setValidators([ Validators.required]);
  }

}
