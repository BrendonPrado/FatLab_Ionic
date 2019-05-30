import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Reserva } from 'src/models/reserva';
import { ObjectEvent, Evento } from 'src/models/object-event';
import { ReservaService } from 'src/service/domain/reserva.service';
import { SharingService } from 'src/service/sharing.service';

@Component({
  selector: 'app-reserva-template',
  templateUrl: './reserva-template.component.html',
  styleUrls: ['./reserva-template.component.scss'],
})
export class ReservaTemplateComponent implements OnInit {

  @Input() reserva: Reserva;
  @Output() modificado = new EventEmitter<ObjectEvent>();

  admin: boolean;

  constructor(private reservaService: ReservaService, private sharing: SharingService) { }

  ngOnInit() {
    this.sharing.isUserLoggedIn.subscribe(u =>
      this.admin = u.funcao.includes('Admin') || u.funcao.includes('Professor')
    );
  }

  remove() {
    this.reservaService.delete(this.reserva.id).subscribe( () => {
      const event: ObjectEvent = { evento: Evento.DELETADO, id: this.reserva.id };
      this.modificado.emit(event);
    });
  }
}
