import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import { AuthService } from 'src/service/auth.service';
import { CredenciaisDTO } from 'src/models/dto/credencias.dto';
import { Router } from '@angular/router';
import { StorageService } from 'src/service/storage.service';
import { Usuario } from 'src/models/usuario';
import { AppComponent } from '../app.component';
import { SharingService } from 'src/service/sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  creds: CredenciaisDTO;
  constructor(private menu: MenuController,
    private authService: AuthService,
    private router: Router,
    private share: SharingService,
    ) {}

  ngOnInit() {
    this.creds = {
      email: '',
      senha: ''
    };
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }
  ionViewWillLeave() {
    this.menu.enable(true);
  }

     autenticar() {
       this.authService.authenticate(this.creds).subscribe(response => {
      this.authService.succesfulLogin(response.headers.get('Authorization'));
      this.authService.me().subscribe(value => {
        this.share.setUsuario(value);
      })
       this.router.navigate(['/landing']);
    }, error => console.log(error)
      );

  }
}
