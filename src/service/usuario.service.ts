import { Injectable } from '@angular/core';
import { UsuarioDTO } from 'src/models/dto/usuario.dto';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {

    usuariosUrl = 'usuarios';

    constructor(private http: HttpClient) {}

    public saveDTO(usuario: UsuarioDTO) {
        return this.http.post(`http://localhost:8080/${this.usuariosUrl}`,usuario);
    }

}
