import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { StorageService } from 'src/service/storage.service';
import { LocalUser } from 'src/models/local_user';
import { AlertController, MenuController } from '@ionic/angular';
import { AuthService } from 'src/service/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {
    constructor(private storage: StorageService,
         private alert: AlertController,
          private auth: AuthService,
          private menu: MenuController) { }

// tslint:disable-next-line: max-line-length
    canActivate(route: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot): boolean | import('@angular/router').UrlTree | import('rxjs').Observable<boolean | import('@angular/router').UrlTree> | Promise<boolean | import('@angular/router').UrlTree> {
        const user: LocalUser = this.storage.getLocalUser();
        if (!user) {
            this.menu.enable(false);
            this.alerta();
            return false;
        }
        return true;


    }

    async alerta() {
        const alert = await this.alert.create({
            header: ` Faça Login`,
            message: 'Não autorizado, por favor entre!',
            buttons: [{
                text: 'ok'
            }]
        });
        this.auth.logout();
        return alert.present();
    }
}

