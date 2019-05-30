import { Component, OnInit, Input } from '@angular/core';
import { Reserva } from 'src/models/reserva';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from 'src/service/domain/reserva.service';
import { ObjectEvent, Evento } from 'src/models/object-event';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
})
export class ReservasComponent implements OnInit {

  @Input() id: string;
  @Input() admin: boolean;
  reservas$: Observable<Reserva[]>;

  constructor(private router: Router,
    private reservaService: ReservaService) {
  }

  materiasUrlList = ['/minhas-materias', '/gerenciar-materia'];
  labUrlList = ['/gerenciar-lab'];
  ngOnInit() {
    if (this.materiasUrlList.includes(this.router.url)) {
      this.reservas$ = this.reservaService.reservasMateria(this.id);
      this.reservaService.reservasMateria(this.id).subscribe(val => {
      });
    }
    if (this.labUrlList.includes(this.router.url)) {
      this.reservas$ = this.reservaService.reservasLab(this.id);
    }
  }


  excluir(retorno: ObjectEvent) {
    this.reservas$ = this.reservaService.reservasMateria(this.id);
    }
}
