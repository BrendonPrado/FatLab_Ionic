import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageService} from '../service/storage.service';
import {API_CONFIG} from '../config/api.config';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let localUser = this.storage.getLocalUser();
        let N = API_CONFIG.baseUrl.length;
        let requestToAPI = req.url.substring(0, N) === API_CONFIG.baseUrl;


        if (localUser && requestToAPI) {
            const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.token)});
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
}

    }

}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};