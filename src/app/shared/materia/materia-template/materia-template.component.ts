import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Materia } from 'src/models/materia';
import { ReservaService } from 'src/service/domain/reserva.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MateriaService } from 'src/service/domain/materia.service';
import { Professor } from 'src/models/professor';
import { ActivatedRoute } from '@angular/router';
import { ObjectEvent, Evento } from 'src/models/object-event';
import { materialize } from 'rxjs/operators';


@Component({
  selector: 'app-materia-template',
  templateUrl: './materia-template.component.html',
  styleUrls: ['./materia-template.component.scss'],
})
export class MateriaTemplateComponent implements OnInit {

  @Input() materia: Materia;
  @Output() modificado: EventEmitter<ObjectEvent>;

  showReservas = false;
  editarOn = false;
  form: FormGroup;
  editarButtonText = 'Editar Informações';

  professores: Professor[];



  constructor(private materiasService: MateriaService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.professores = this.activatedRoute.snapshot.data['professores'];
    this.form = this.formBuilder.group({
      nome: [this.materia.nome],
      prof: [],
      turma: [this.materia.turma]
    });
  }

  reservasOn() {
    this.showReservas = !this.showReservas;
  }

  editarInfos() {
    this.editarOn = !this.editarOn;
    this.editarButtonText = (!this.editarOn) ? 'Editar Informações' : 'Salvar Informações';
    if (!this.editarOn) {
      console.log(this.form.getRawValue());
      this.materiasService.update(this.materia.id, this.form.getRawValue()).subscribe();
    }
  }

  remove(id: string) {
    this.materiasService.delete(id).subscribe( () => {
      const event: ObjectEvent = { evento: Evento.DELETADO, id: this.materia.id };
      this.modificado.emit(event);
    });
  }


}
