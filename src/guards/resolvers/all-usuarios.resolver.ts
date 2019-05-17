import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/models/usuario';
import { UsuarioService } from 'src/service/domain/usuario.service';


@Injectable( {providedIn: 'root'})
export class AllUsuariosResolver implements Resolve<any[]> {

    constructor(private usuarioService: UsuarioService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any[] | Observable<any[]> | Promise<any[]> {
        return this.usuarioService.findAll();
    }


}

