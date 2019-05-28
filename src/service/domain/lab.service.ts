import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LabDTO } from 'src/models/dto/labDTO';
import { API_CONFIG } from 'src/config/api.config';
import { Observable } from 'rxjs';
import { Lab } from 'src/models/lab';

@Injectable({providedIn: 'root'})
export class LabService {

    constructor(private http: HttpClient) { }
    private labUrl = 'labs';

    save(lab: LabDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/${this.labUrl}`, lab);
    }

    findAll(): Observable<Array<Lab>> {
        return this.http.get<Array<Lab>>(`${API_CONFIG.baseUrl}/${this.labUrl}`);
    }

    delete(id: string) {
        return this.http.delete(`${API_CONFIG.baseUrl}/${this.labUrl}/${id}`);
    }

    update(id: string, labDTO: LabDTO) {
        return this.http.put(`${API_CONFIG.baseUrl}/${this.labUrl}/${id}`, labDTO);
      }

      verificaLabsDisponivel(data: string, aulas: number[] ): Observable<Array<Lab>> {
        let params = new HttpParams();
        params = params.append('data', new Date(Date.parse(data)).toString() );
        params = params.append('aulas', aulas.toString());
        return this.http.get<Array<Lab>>(`${API_CONFIG.baseUrl}/${this.labUrl}/disponivel/dia`, { params });
    }


    verificaLabsDisponivelMes(aulas: number[], dias: number[], mes: number ): Observable<Lab[]> {
        let params = new HttpParams();
        params = params.append('mes', mes.toString() );
        params = params.append('aulas', aulas.toString());
        params = params.append('diasSemana', dias.toString());

        return this.http.get<Array<Lab>>(`${API_CONFIG.baseUrl}/${this.labUrl}/disponivel/mes`, { params });
    }



}
