import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/models/usuario';
import { AuthService } from 'src/service/auth.service';
import { LoadingController } from '@ionic/angular';
import { SharingService } from 'src/service/sharing.service';


@Injectable({providedIn: 'root'})
export class UsuarioResolver implements Resolve<Usuario> {


    constructor(private auth: AuthService, private loader: LoadingController, private sharing: SharingService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Usuario | Observable<Usuario> | Promise<Usuario> {
      return this.auth.me();
    }
}

