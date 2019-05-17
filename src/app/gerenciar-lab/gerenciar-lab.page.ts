import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Lab} from '../../models/lab';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gerenciar-lab',
  templateUrl: './gerenciar-lab.page.html',
  styleUrls: ['./gerenciar-lab.page.scss'],
})
export class GerenciarLabPage implements OnInit {

  labs: Array<Lab> = new Array<Lab>();

  constructor(private activatedRoute: ActivatedRoute) {
    this.labs = this.activatedRoute.snapshot.data['labs'];
   }

  ionViewWillEnter() {
  }

  ngOnInit() {
  }
}
