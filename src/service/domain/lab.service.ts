import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LabDTO } from 'src/models/dto/labDTO';
import { API_CONFIG } from 'src/config/api.config';
import { Observable } from 'rxjs';
import { Lab } from 'src/models/lab';

@Injectable({providedIn: 'root'})
export class LabService {
    private labUrl = 'labs';
    constructor(private http: HttpClient) { }


    save(lab: LabDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/${this.labUrl}`, lab);
    }

    findAll(): Observable<Array<Lab>> {
        return this.http.get<Array<Lab>>(`${API_CONFIG.baseUrl}/${this.labUrl}`);
    }
}
