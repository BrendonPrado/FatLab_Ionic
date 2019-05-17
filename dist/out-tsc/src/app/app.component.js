import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from 'src/service/auth.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, auth) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.auth = auth;
        this.appPages = [
            {
                title: 'Home',
                url: '/landing',
                icon: 'home'
            },
            {
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
            },
            {
                title: 'Sair',
                url: '/',
                icon: 'exit'
            }
        ];
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            AuthService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map