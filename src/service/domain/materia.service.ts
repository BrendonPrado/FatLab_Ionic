import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MateriaDTO} from 'src/models/dto/materia.dto';
import { API_CONFIG } from 'src/config/api.config';
import { Observable } from 'rxjs';
import { MatriculaDTO } from 'src/models/dto/matricula.dto';
import { Materia } from 'src/models/materia';

@Injectable({providedIn: 'root'})
export class MateriaService {
    constructor(private http: HttpClient) {}
    materiaUrl = 'materias';
   public save(materia: MateriaDTO) {
       return this.http.post(`${API_CONFIG.baseUrl}/${this.materiaUrl}`, materia);
   }

   public findAll(): Observable<Array<Materia>> {
       return this.http.get<Array<Materia>>(`${API_CONFIG.baseUrl}/${this.materiaUrl}`);
   }

   matricula(matricula: MatriculaDTO, tipo: string) {
       return this.http.post(`${API_CONFIG.baseUrl}/${this.materiaUrl}/${tipo}`, matricula);
  }
}
