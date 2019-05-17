import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/service/storage.service';
import { Usuario } from 'src/models/usuario';
import { LocalUser } from 'src/models/local_user';
import { SharingService } from 'src/service/sharing.service';
import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/service/auth.service';


@Injectable({providedIn: 'root'})
export class AlunoProfessorGuard implements CanActivate {


    private usuario: Usuario;

    constructor(private storage: StorageService,
        private sharing: SharingService,
        private alert: AlertController,
        private auth: AuthService) {
            this.sharing.atualiza();
            this.sharing.isUserLoggedIn.subscribe(value => {
                this.usuario = value;
            });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            const user: LocalUser = this.storage.getLocalUser();
            if (!user ||  (!this.usuario.funcao.includes('Professor') &&  !this.usuario.funcao.includes('Aluno'))) {
                this.alerta();
                this.auth.logout();
                return false;
            }
            return true;
         }

    async alerta() {
        const alert = await this.alert.create({
            header: `Você não é autorizado a essa função `,
            message: 'Não autorizado, por favor entre novamente!',
            cssClass: 'secondary',
            buttons: [{
                text: 'ok'
            }]
        });
        return alert.present();
    }
}


