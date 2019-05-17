import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorInterceptorProvider } from 'src/interceptors/error.interceptor';
import { AuthInterceptorProvider } from 'src/interceptors/auth.interceptor';
import {CreatedInterceptorProvider} from 'src/interceptors/created.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [BrowserAnimationsModule,
    IonicModule.forRoot(),
     AppRoutingModule
     , HttpClientModule,
    ],
  providers: [
    AuthInterceptorProvider,
    CreatedInterceptorProvider,
    ErrorInterceptorProvider,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
