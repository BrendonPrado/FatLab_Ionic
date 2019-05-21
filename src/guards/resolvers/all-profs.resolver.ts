import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Professor } from 'src/models/professor';
import { ProfessorService } from 'src/service/domain/professor.service';

@Injectable({ providedIn: 'root' })
export class AllProfessoresResolver implements Resolve<Professor[]> {


    constructor(private profService: ProfessorService) {}

    resolve(route: ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot): Professor[] | Observable<Professor[]> {
        return this.profService.findAll();
    }

}
