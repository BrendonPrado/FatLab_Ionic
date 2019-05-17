import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { Observable, Subject } from 'rxjs';
import { Reserva } from 'src/models/reserva';

@Injectable({providedIn: 'root'})
export class ReservaService {


    private reservasUrl = 'reservas';
    constructor(private http: HttpClient) {
     }


     public  reservasMateria(id: string): Observable<Reserva[]> {
        return  this.http.get<Array<Reserva>>(`${API_CONFIG.baseUrl}/${this.reservasUrl}/materias/${id}`);
     }

     public reservasLab(id: string):  Observable<Reserva[]> {
      return this.http.get<Array<Reserva>>(`${API_CONFIG.baseUrl}/${this.reservasUrl}/labs/${id}`);
   }

}
