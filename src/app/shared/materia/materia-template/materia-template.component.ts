import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Materia } from 'src/models/materia';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MateriaService } from 'src/service/domain/materia.service';
import { Professor } from 'src/models/professor';
import { ActivatedRoute } from '@angular/router';
import { ObjectEvent, Evento } from 'src/models/object-event';
import { MatriculaDTO } from 'src/models/dto/matricula.dto';


@Component({
  selector: 'app-materia-template',
  templateUrl: './materia-template.component.html',
  styleUrls: ['./materia-template.component.scss'],
})
export class MateriaTemplateComponent implements OnInit {

  @Input() materia: Materia;
  @Input() admin: boolean;
  @Output() modificado = new EventEmitter<ObjectEvent>();

  showReservas = false;
  editarOn = false;
  form: FormGroup;
  editarButtonText = 'Editar Informações';
  id_prof;
  professores: Professor[];



  constructor(private materiasService: MateriaService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id_prof = this.materia.professor ? this.materia.professor.id : 0;
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

      const id_materia_prof = this.materia.professor ? this.materia.professor.id : null;

      if ( this.id_prof !== id_materia_prof) {
        const matricula: MatriculaDTO = {
          materia_id: this.materia.id,
          usuario_id: this.id_prof != 0 ? this.id_prof : null
        };
        this.materiasService.atualizaProf(matricula).subscribe();
      }
      this.materiasService.update(this.materia.id, this.form.getRawValue()).subscribe();
    }
  }

  remove(id: string) {
    this.materiasService.delete(id).subscribe( () => {
      const event: ObjectEvent = { evento: Evento.DELETADO, id: this.materia.id };
      this.modificado.emit(event);
    });
  }

  trocaProf(event) {
    this.id_prof = event.detail.value;
  }
}
