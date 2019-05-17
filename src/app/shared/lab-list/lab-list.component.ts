import { Component, OnInit, Input } from '@angular/core';
import { Lab } from 'src/models/lab';

@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.scss'],
})
export class LabListComponent implements OnInit {

  @Input() labs: Array<Lab>;

  constructor() { }

  ngOnInit() {}

}
