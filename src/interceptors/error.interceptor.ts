import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AlertController} from '@ionic/angular';
import { StorageService } from 'src/service/storage.service';
import { stringify } from '@angular/compiler/src/util';

@Injectable({providedIn: 'root'})
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService, public alertCtrl: AlertController) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // server-side error
                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    }
                    switch (error.status) {
                        case 400:
                            this.handle400(error);
                            break;
                        case 401:
                            this.handle401(error);
                            break;
                        case 403:
                            this.handle403();
                            break;
                        default:
                            this.handleDefaultError(error);
                            break;

                    }
                    return throwError(errorMessage);
                })
            );
    }
    async handle400(error: HttpErrorResponse) {
        console.log(error.error.errors);
        let msg = '';
        error.error.errors.forEach(e => {
            msg += `- ${e.fieldName}: ${e.message} \n`;
        });
        const alert = await this.alertCtrl.create({
            header: `Por favor corrija os erros:`,
            message: msg,
            buttons: [{
                text: 'ok'
            }]
        });
        return alert.present();
    }
    handle403() {
        this.storage.setLocalUser(null);
    }
   async handle401(error: HttpErrorResponse) {
       const alert = await this.alertCtrl.create({
            header: `Erro ${error.status}: falha de autenticação `,
            message: 'Email ou senha incorretos',
            buttons: [{
                text: 'ok'
            }]
        });
        return alert.present();

    }


   async handleDefaultError(error: HttpErrorResponse) {
       console.log(error);
        const alert = await this.alertCtrl.create({
            header: `Ops deu erro status: ${error.status} `,
            message: `Por favor contate o suporte e informe o número do status acima!`,
            buttons: [{
                text: 'ok'
            }]
        });
        return alert.present();

    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};
