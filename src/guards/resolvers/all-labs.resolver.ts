import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MateriaService } from 'src/service/domain/materia.service';
import { Materia } from 'src/models/materia';
import { Lab } from 'src/models/lab';
import { LabService } from 'src/service/domain/lab.service';


@Injectable({providedIn: 'root'})
export class AllLabsResolver implements Resolve<Array<Lab>> {


    constructor(private labService: LabService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Lab[] | Observable<Lab[]> | Promise<Lab[]> {
        return this.labService.findAll();
    }

}

