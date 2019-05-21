import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lab } from 'src/models/lab';
import { ReservaService } from 'src/service/domain/reserva.service';
import { ObjectEvent, Evento } from 'src/models/object-event';
import { LabService } from 'src/service/domain/lab.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lab-template',
  templateUrl: './lab-template.component.html',
  styleUrls: ['./lab-template.component.scss'],
})
export class LabTemplateComponent implements OnInit {

  showReservas = false;
  @Input() lab: Lab;
  @Output() modificado = new EventEmitter<ObjectEvent>();
  editarOn = false;
  editarButtonText = 'Editar Informações';
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
     private labService: LabService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      numero: [this.lab.numero],
      capacidade: [this.lab.capacidade]
    });
  }

  reservasOn() {
    this.showReservas = !this.showReservas;
  }

  remove(id: string) {
    this.labService.delete(id).subscribe(() => {
      const event: ObjectEvent = { evento: Evento.DELETADO, id: this.lab.id };
      this.modificado.emit(event);
    });
  }


  editarInfos() {
    this.editarOn = !this.editarOn;
    this.editarButtonText = (!this.editarOn) ? 'Editar Informações' : 'Salvar Informações';
    if (!this.editarOn) {
      console.log(this.form.getRawValue());
      this.labService.update(this.lab.id, this.form.getRawValue()).subscribe();
    }
  }
}
