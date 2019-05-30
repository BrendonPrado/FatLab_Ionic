import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Materia } from 'src/models/materia';
import { LabService } from 'src/service/domain/lab.service';
import { Lab } from 'src/models/lab';
import { ReservaDTO } from 'src/models/dto/reserva.dto';
import { ReservaService } from 'src/service/domain/reserva.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservar-dia',
  templateUrl: './reservar-dia.component.html',
  styleUrls: ['./reservar-dia.component.scss'],
})
export class ReservarDiaComponent implements OnInit {

  form: FormGroup;
  materias: Materia[];
  labs$: Observable<Lab[]>;
  dataAgr = new Date();

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private labService: LabService,
    private reservaService: ReservaService
  ) { }

  ngOnInit() {
    this.materias = this.activatedRoute.snapshot.data['materias'];
    this.form = this.formBuilder.group({
        dia: ['', Validators.required],
        aulas: ['', Validators.required],
        materia: ['', Validators.required],
        lab: ['', Validators.required]
    });
  }

  verificaLabs() {
    if (this.form.get('aulas').valid && (this.form.get('dia').valid && this.form.get('lab').value == '')) {
     this.labs$ = this.labService.verificaLabsDisponivel(this.form.get('dia').value, this.form.get('aulas').value);
     this.form.get('lab').setValue('');
    }
  }

  reservar() {
    if (this.form.valid) {

      const reserva: ReservaDTO = {
        diaMes: new Date(Date.parse(this.form.get('dia').value)).toISOString(),
        lab_id: this.form.get('lab').value,
        materia_id: this.form.get('materia').value,
        num_aula: this.form.get('aulas').value,
        turno: 'Diurno'
      };

      this.reservaService.saveDia(reserva).subscribe(() => {
        this.form.reset();
        this.form.get('lab').setValue('');
      });
    }
  }
}
