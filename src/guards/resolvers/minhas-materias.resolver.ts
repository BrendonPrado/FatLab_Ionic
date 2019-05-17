import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/service/auth.service';
import { SharingService } from 'src/service/sharing.service';
import { Materia } from 'src/models/materia';


@Injectable({providedIn: 'root'})
export class MinhasMateriasResolver implements Resolve<Materia[]> {

    constructor( private auth: AuthService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Materia[] | Observable<Materia[]> | Promise<Materia[]> {
        return this.auth.findMinhasMaterias();
    }
}

