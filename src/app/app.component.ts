import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from 'src/service/auth.service';
import { Usuario } from 'src/models/usuario';
import { SharingService } from 'src/service/sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  usuario: Usuario;
  appPages: Array<any>;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private sharing: SharingService,
    private menu: MenuController
  ) {
    this.menu.enable(false);
    this.sharing.isUserLoggedIn.subscribe(value => {
      this.usuario = value;
      this.atualiza();
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

   // monta o side menu a partir do nivel do usuário no momento!
  atualiza() {
    this.appPages = [];
    this.appPages.push({
      title: 'Home',
      url: '/landing',
      icon: 'home',
      nivel: 'autenticado'
    }
      , {
        title: 'Perfil',
        url: '/perfil',
        icon: 'person',
        nivel: 'autenticado'
      });
    if (this.usuario.funcao && ((this.usuario.funcao.includes('Aluno')) || (this.usuario.funcao.includes('Professor')))) {
      this.appPages.push({
        title: 'Aula Agora',
        url: '/materias-agora',
        icon: 'notifications-outline',
      },
        {
          title: 'Matricular em uma matéria',
          url: '/matricular',
          icon: 'school',
        },
        {
          title: 'Minhas Matérias',
          url: '/minhas-materias',
          icon: 'bookmarks',
        });
    }
    if (this.usuario.funcao && this.usuario.funcao.includes('Professor')) {
      this.appPages.push({
        title: 'Reservar Lab',
        url: '/reservar-lab',
        icon: 'laptop',
      });
    }
    if (this.usuario.funcao && this.usuario.funcao.includes('Admin')) {
      this.appPages.push({
        title: 'Cadastrar novo Usuário',
        url: '/cadastrar-novo-usuario',
        icon: 'person-add',
      },
        {
          title: 'Cadastrar Lab',
          url: '/cadastrar-lab',
          icon: 'unlock',
        },
        {
          title: 'Cadastrar nova Matéria',
          url: '/cadastrar-materia',
          icon: 'unlock',
        },
        {
          title: 'Gerenciar Usuários',
          url: '/gerenciar-usuarios',
          icon: 'unlock',
        },
        {
          title: 'Gerenciar Labs',
          url: '/gerenciar-lab',
          icon: 'unlock',
        },
        {
          title: 'Gerenciar Matérias',
          url: '/gerenciar-materia',
          icon: 'unlock',
        }
      );
    }
    this.appPages.push({
      title: 'Sair',
      url: '/',
      icon: 'exit',
    });
    this.sharing.setPages(this.appPages);
  }

  logout() {
    this.auth.logout();
  }
}
