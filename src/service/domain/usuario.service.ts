import { Injectable } from '@angular/core';
import { UsuarioDTO } from 'src/models/dto/usuario.dto';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/models/usuario';
import { Aluno } from 'src/models/aluno';
import { Professor } from 'src/models/professor';
import { Admin } from 'src/models/admin';
import { API_CONFIG } from 'src/config/api.config';
import { UsuarioNewDTO } from 'src/models/dto/usuario.new.dto';
import { StorageService } from '../storage.service';
import { SharingService } from '../sharing.service';

@Injectable({providedIn: 'root'})
export class UsuarioService {

  usuariosUrl = 'usuarios';
  usuario: Usuario;


  constructor(private http: HttpClient, private sharing: SharingService) {
      this.sharing.isUserLoggedIn.subscribe(value => {
        this.usuario = value;
      });
  }

  saveNewDTO(usuario: UsuarioNewDTO) {
      return this.http.post(`${API_CONFIG.baseUrl}/${this.usuariosUrl}/new/`, usuario);
  }


    delete(id: string) {
        return this.http.delete(`${API_CONFIG.baseUrl}/${this.usuariosUrl}/${id}`);
    }

    saveDTO(usuario: UsuarioDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/${this.usuariosUrl}`, usuario);
    }

    findAll() {

        return this.http.get<Array<Usuario>>(`${API_CONFIG.baseUrl}/${this.usuariosUrl}`);
    }

    saveAdmin(adm: UsuarioDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/${this.usuariosUrl}/new/admin`, adm);
    }

    update(id: number, usuarioDTO: UsuarioDTO) {
        return this.http.put(`${API_CONFIG.baseUrl}/${this.usuariosUrl}/${id}`, usuarioDTO);
    }
}
