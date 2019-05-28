import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Materia } from 'src/models/materia';
import { Observable } from 'rxjs';
import { Lab } from 'src/models/lab';
import { ActivatedRoute } from '@angular/router';
import { LabService } from 'src/service/domain/lab.service';
import { ReservaService } from 'src/service/domain/reserva.service';
import { ReservaDTO } from 'src/models/dto/reserva.dto';

@Component({
  selector: 'app-reservar-mes',
  templateUrl: './reservar-mes.component.html',
  styleUrls: ['./reservar-mes.component.scss'],
})
export class ReservarMesComponent implements OnInit {


  form: FormGroup;
  materias: Materia[];
  labs$: Observable<Lab[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private labService: LabService,
    private reservaService: ReservaService
  ) { }

  ngOnInit() {
    this.materias = this.activatedRoute.snapshot.data['materias'];
    this.form = this.formBuilder.group({
      mes: ['', Validators.required],
      aulas: ['', Validators.required],
      dias: ['', Validators.required],
      materia: ['', Validators.required],
      lab: ['', Validators.required]
    });
  }

  verificaLabs() {
    if (this.form.get('aulas').valid && this.form.get('dias').valid && this.form.get('mes').valid) {

      const date = new Date(Date.parse(this.form.get('mes').value));

      this.labs$ = this.labService.verificaLabsDisponivelMes(
        this.form.get('aulas').value,
        this.form.get('dias').value,
        date.getMonth());

      this.form.get('lab').setValue('');
    }
  }

  reservar() {
    if (this.form.valid) {
      const reserva: ReservaDTO = {
        diaMes: new Date(Date.parse(this.form.get('mes').value)).toISOString(),
        lab_id: this.form.get('lab').value,
        materia_id: this.form.get('materia').value,
        num_aula: this.form.get('aulas').value,
        turno: 'Diurno'
      };
      console.log(reserva);
      this.reservaService.save(reserva).subscribe(() => {
        this.form.reset();
        this.form.get('lab').setValue('');
      });
    }
  }
}
