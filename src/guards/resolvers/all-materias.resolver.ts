import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MateriaService } from 'src/service/domain/materia.service';
import { Materia } from 'src/models/materia';


@Injectable({providedIn: 'root'})
export class AllMateriasResolver implements Resolve<Array<Materia>> {

    constructor(private materiaService: MateriaService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Materia[] | Observable<Materia[]> | Promise<Materia[]> {
        return this.materiaService.findAll();
    }

}

