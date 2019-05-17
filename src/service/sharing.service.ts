import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';
import { Usuario } from 'src/models/usuario';
import { AuthService } from './auth.service';
import { Materia } from 'src/models/materia';

@Injectable({providedIn: 'root'})
export class SharingService {
  constructor(private auth: AuthService) {

  }
    public isUserLoggedIn: BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>({email: '', id: '', nome: '' });
    public pages: BehaviorSubject<any> = new BehaviorSubject<any>(null);


    setUsuario(usuario: Usuario) {
        this.isUserLoggedIn.next(usuario);
      }

    setPages(paginas: any[]) {
        this.pages.next(paginas);
      }


      atualiza() {
       this.auth.me().subscribe( val =>  {this.isUserLoggedIn.next(val); });
      }
}
