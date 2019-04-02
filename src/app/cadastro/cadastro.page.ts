import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public menu:MenuController) { }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.menu.enable(false);
  }
  ionViewWillLeave() {
    this.menu.enable(true);
  }


}
