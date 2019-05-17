import { Component, OnInit } from '@angular/core';
import { ControllService } from 'src/service/controll.service';
import { LabDTO } from 'src/models/dto/labDTO';
import { MateriaService } from 'src/service/domain/materia.service';
import { LabService } from 'src/service/domain/lab.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-lab',
  templateUrl: './cadastrar-lab.page.html',
  styleUrls: ['./cadastrar-lab.page.scss'],
})
export class CadastrarLabPage implements OnInit {
    numLab: string;
    capacidade: string;
  constructor(private labService: LabService) { }

  ionViewWillEnter() {
  }


  ngOnInit() {
  }

  save() {
    const lab: LabDTO = {
      numero: this.numLab,
      capacidade: this.capacidade
    };

    this.labService.save(lab).subscribe(sucess => {
      this.numLab = '';
      this.capacidade = '';
    });
  }
}
