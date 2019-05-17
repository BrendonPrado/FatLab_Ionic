import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/service/domain/materia.service';
import { MateriaDTO } from 'src/models/dto/materia.dto';
import { ControllService } from 'src/service/controll.service';

@Component({
  selector: 'app-cadastrar-materia',
  templateUrl: './cadastrar-materia.page.html',
  styleUrls: ['./cadastrar-materia.page.scss'],
})
export class CadastrarMateriaPage implements OnInit {
  nomeMateria: string;
  turma: string;

  constructor(private service: MateriaService) { }


  ionViewWillEnter() {
  }

  ngOnInit() {
  }

  save() {
    const materia: MateriaDTO = {
      nome : this.nomeMateria,
      turma: this.turma.toUpperCase()
    };

    this.service.save(materia).subscribe(() => {
      this.nomeMateria = '';
      this.turma = '';
    }, error => {
      alert(error.message);
    });
  }

}
