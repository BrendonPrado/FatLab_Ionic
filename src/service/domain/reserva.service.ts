import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { Observable, Subject } from 'rxjs';
import { Reserva } from 'src/models/reserva';
import { ReservaDTO } from 'src/models/dto/reserva.dto';
import { ReservaMesDTO } from 'src/models/dto/reserva-mes.dto';

@Injectable({providedIn: 'root'})
export class ReservaService {
    private reservasUrl = 'reservas';
    constructor(private http: HttpClient) {
     }


   reservasMateria(id: string): Observable<Reserva[]> {
        return  this.http.get<Reserva[]>(`${API_CONFIG.baseUrl}/${this.reservasUrl}/materias/${id}`);
     }

   reservasLab(id: string):  Observable<Reserva[]> {
      return this.http.get<Reserva[]>(`${API_CONFIG.baseUrl}/${this.reservasUrl}/labs/${id}`);
   }

   saveDia(reserva: ReservaDTO) {
      return this.http.post(`${API_CONFIG.baseUrl}/${this.reservasUrl}/dia`, reserva);
   }

   saveMes(reserva: ReservaMesDTO) {
      return this.http.post(`${API_CONFIG.baseUrl}/${this.reservasUrl}/mes`, reserva);
   }

  delete(id: string) {
   return this.http.delete(`${API_CONFIG.baseUrl}/${this.reservasUrl}/${id}`);
 }
}
