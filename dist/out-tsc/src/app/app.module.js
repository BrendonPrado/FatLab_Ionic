import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioService } from 'src/service/domain/usuario.service';
import { BaseHttpService } from 'src/provider/base-http';
import { MateriaService } from 'src/service/domain/materia.service';
import { ErrorInterceptorProvider } from 'src/interceptors/error.interceptor';
import { AuthInterceptorProvider } from 'src/interceptors/auth.interceptor';
import { AuthService } from 'src/service/auth.service';
import { StorageService } from 'src/service/storage.service';
import { ControllService } from 'src/service/controll.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [],
            imports: [BrowserModule,
                IonicModule.forRoot(),
                AppRoutingModule,
                HttpClientModule
            ],
            providers: [
                AuthInterceptorProvider,
                ErrorInterceptorProvider,
                AuthService,
                StorageService,
                BaseHttpService,
                ControllService,
                UsuarioService,
                MateriaService,
                StatusBar,
                SplashScreen,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map