import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-message',
  templateUrl: './v-message.component.html',
  styleUrls: ['./v-message.component.scss'],
})
export class VMessageComponent implements OnInit {

  @Input() message: String;
  constructor() { }

  ngOnInit() {}

}
