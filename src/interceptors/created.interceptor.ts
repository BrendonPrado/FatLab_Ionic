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

@Injectable({providedIn: 'root'})
export class CreatedInterceptor implements HttpInterceptor {

    constructor(private alertCtrl: AlertController) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    switch(event.status){
                        case 201:
                            this.handle201();
                            break;
                        case 204:
                            this.handle204();
                            break;
                    }
            


                }
            })
            );     
    }
    async handle204() {
        const alert = await this.alertCtrl.create({
            header: `Ok`,
            message: 'Atualizado com sucesso',
            buttons: [{
                text: 'ok'
            }]
        });
        return alert.present();

    }

    async handle201(){
        const alert = await this.alertCtrl.create({
            header: `Ok`,
            message: 'Criado com sucesso',
            buttons: [{
                text: 'ok'
            }]
        });
        return alert.present();

    }
}

export const CreatedInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: CreatedInterceptor,
    multi: true,
};
