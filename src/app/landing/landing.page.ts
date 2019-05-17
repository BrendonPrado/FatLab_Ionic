import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { Usuario } from 'src/models/usuario';
import { UsuarioService } from 'src/service/domain/usuario.service';
import { SharingService } from 'src/service/sharing.service';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private auth: AuthService
    , public usuarioService: UsuarioService ,
      private sharing: SharingService,
      private activatedRoute: ActivatedRoute,
      private menu: MenuController
      ) {
       this.sharing.isUserLoggedIn.subscribe(value => {
         this.usuarioLogado = value;
       });
       this.sharing.pages.subscribe( val => this.pages = val);

      }

  pages: any[];
  usuarioLogado: Usuario;

  ngOnInit() {
    this.sharing.setUsuario(this.activatedRoute.snapshot.data['usuario']);
  }

  ionViewWillLeave() {
    this.menu.enable(true);
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  logout() {
    this.auth.logout();
  }

}
