import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HTTP_INTERCEPTORS, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AlertController} from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class CreatedInterceptor implements HttpInterceptor {

    constructor(private alertCtrl: AlertController, private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    switch (event.status) {
                        case 201:
                            this.handle('criado com sucesso');
                            break;
                        case 204:
                            this.handle('atualizado com sucesso');
                            break;
                    }
                }
            })
        );
    }
    async handle(msg: string) {
        let alert;
        if (this.router.url == '/perfil') {
            alert = await this.alertCtrl.create({
                header: `Ok`,
                message: 'Por favor faça novamente o login',
                buttons: [{
                    text: 'ok'
                }]
            });
        } else {
            alert = await this.alertCtrl.create({
                header: `Ok`,
                message: msg,
                buttons: [{
                    text: 'ok'
                }]
            });
}
        return alert.present();

    }
}

export const CreatedInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: CreatedInterceptor,
    multi: true,
};
