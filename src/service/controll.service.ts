import {StorageService} from './storage.service';

import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { AuthService } from './auth.service';
import { LocalUser } from 'src/models/local_user';
import { SharingService } from './sharing.service';
import { Usuario } from 'src/models/usuario';


@Injectable()
export class ControllService {
    usuario: Usuario;

    constructor(
        private sharing: SharingService,
        private auth: AuthService,
        private storage: StorageService,
        private alert: AlertController) {
            this.sharing.isUserLoggedIn.subscribe(value => {
                this.usuario = value;
            });

        }

     async checkUserAuth() {
        const user: LocalUser = this.storage.getLocalUser();
        if (!user) {
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

     async checkProfessorAuth() {
       const user: LocalUser = this.storage.getLocalUser();
       if (!user ||  !this.usuario.funcao.includes('PROFESSOR')) {
            const alert = await this.alert.create({
            header: `Você não é autorizado a essa função `,
            message: 'Não autorizado, por favor entre novamente!',
            cssClass: 'secondary',
            buttons: [{
                text: 'ok'
            }]
        });
        this.auth.logout();
        return alert.present();
       }
    }

     async checkAdminAuth() {
        const user: LocalUser = this.storage.getLocalUser();
        if (!user ||  !this.usuario.funcao.includes('ADMIN')) {
             const alert = await this.alert.create({
             header: `Você não é autorizado a essa função `,
             message: 'Não autorizado, por favor entre novamente!',
             cssClass: 'secondary',
             buttons: [{
                 text: 'ok'
             }]
         });
         this.auth.logout();
         return alert.present();
        }
     }

      async checkProfessorAlunoAuth() {
        const user: LocalUser = this.storage.getLocalUser();
        if (!user ||  !(this.usuario.funcao.includes('PROFESSOR') || this.usuario.funcao.includes('ALUNO'))  ) {
             const alert = await this.alert.create({
             header: `Você não é autorizado a essa função `,
             message: 'Não autorizado, por favor entre novamente!',
             cssClass: 'secondary',
             buttons: [{
                 text: 'ok'
             }]
         });
         this.auth.logout();
         return alert.present();
        }
     }
}
