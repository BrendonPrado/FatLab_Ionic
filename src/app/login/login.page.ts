import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public menu:MenuController){}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }
  ionViewWillLeave() {
    this.menu.enable(true);
  }

}
