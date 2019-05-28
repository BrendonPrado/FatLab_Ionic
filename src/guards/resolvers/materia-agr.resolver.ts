import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Materia } from 'src/models/materia';
import { AuthService } from 'src/service/auth.service';

@Injectable({ providedIn: 'root' })
export class MateriaAgoraResolver implements Resolve<Materia> {


    constructor(private auth: AuthService) {}

    resolve(route: ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot): Observable<Materia> {
        return this.auth.finMateriaAgr();
    }
}
