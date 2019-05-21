import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professor } from 'src/models/professor';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/config/api.config';

@Injectable({providedIn: 'root'})
export class ProfessorService {

    professoresUrl = 'professores';

    constructor(private http: HttpClient) { }

    findAlunoByUsuarioId(id: string): Observable<Professor> {
        return this.http.get<Professor>(`${API_CONFIG.baseUrl}/${this.professoresUrl}/usuario/${id}`);
    }

    findAll(): Observable<Professor[]> {
        return this.http.get<Professor[]>(`${API_CONFIG.baseUrl}/${this.professoresUrl}`);
    }
}
