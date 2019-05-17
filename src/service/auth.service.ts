import {CredenciaisDTO} from '../models/dto/credencias.dto';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from '../config/api.config';
import {StorageService} from './storage.service';
import {LocalUser} from '../models/local_user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Usuario } from 'src/models/usuario';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Materia } from 'src/models/materia';

@Injectable({providedIn: 'root'})
export class AuthService {


    jwtHelper: JwtHelperService = new JwtHelperService();
    constructor(public http: HttpClient, public storage: StorageService, private router: Router) {}

      me(): Observable<Usuario> {
         return  this.http.get<Usuario>(`${API_CONFIG.baseUrl}/auth/me`);
      }

    authenticate(creds: CredenciaisDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/login`
                , creds
            , {
            observe: 'response',
    });
   }

    succesfulLogin(authorizationToken: string) {
        const tok = authorizationToken.substring(7);
        const user: LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
    }




    logout() {
        this.storage.setLocalUser(null);
        this.router.navigate(['/']);
    }

    findMinhasMaterias() :Observable<Array<Materia>> {
        return this.http.get<Array<Materia>>(`${API_CONFIG.baseUrl}/auth/me/materias`);
    }
}
