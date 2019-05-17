import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { Observable } from 'rxjs';
import { Aluno } from 'src/models/aluno';

@Injectable({providedIn: 'root'})
export class AlunoService {

    private alunosUrl = 'alunos';

    constructor(private http: HttpClient) { }


    findAlunoByUsuarioId(id: string): Observable<Aluno> {
        return this.http.get<Aluno>(`${API_CONFIG.baseUrl}/${this.alunosUrl}/usuario/${id}`);
    }

}
