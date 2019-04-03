import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/landing',
      icon: 'home'
    }
    , {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person'
    },
    {
      title: 'Aula Agora',
      url: '/materias-agora',
      icon: 'notifications-outline'
    },
    {
      title: 'Matricular em uma matéria',
      url: '/matricular',
      icon: 'school'
    },
    {
      title: 'Minhas Matérias',
      url: '/minhas-materias',
      icon: 'bookmarks'
    },
    {
      title: 'Reservar Lab',
      url: '/reservar-lab',
      icon: 'laptop'
    },
    {
      title: 'Cadastrar novo Usuário',
      url: '/cadastrar-novo-usuario',
      icon: 'person-add'
    },
    {
      title: 'Cadastrar Lab',
      url: '/cadastrar-lab',
      icon: 'glasses'
    },
    {
      title: 'Cadastrar nova Matéria',
      url: '/cadastrar-materia',
      icon: 'glasses'
    },
    {
      title: 'Gerenciar Usuários',
      url: '/gerenciar-usuarios',
      icon: 'glasses'
    },
    {
      title: 'Gerenciar Labs',
      url: '/gerenciar-lab',
      icon: 'glasses'
    },
    {
      title: 'Gerenciar Matérias',
      url: '/gerenciar-materia',
      icon: 'glasses'
    }
    ,{
      title: 'Sair',
      url: '/',
      icon: 'exit'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
