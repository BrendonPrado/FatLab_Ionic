import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControllService } from 'src/service/controll.service';
import { MateriaService } from 'src/service/domain/materia.service';
import { Materia } from 'src/models/materia';
import { MateriaDTO } from 'src/models/dto/materia.dto';
import { MatriculaDTO } from 'src/models/dto/matricula.dto';
import { SharingService } from 'src/service/sharing.service';
import { Usuario } from 'src/models/usuario';
import { UsuarioService } from 'src/service/domain/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-matricular',
  templateUrl: './matricular.page.html',
  styleUrls: ['./matricular.page.scss']

})
export class MatricularPage implements OnInit,OnChanges {
    materia: Materia = {
      id: '',
      nome: ''
    };
    usuarioLogado: Usuario;
    materias: Array<Materia>;


    minhasMaterias: Array<Materia>;

  constructor(private service: MateriaService,
    private sharing: SharingService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
   ) {
    this.sharing.isUserLoggedIn.subscribe(value => {
      this.usuarioLogado = value;
    });

    this.materias = this.activatedRoute.snapshot.data['materias'];
    this.minhasMaterias = this.activatedRoute.snapshot.data['minhasMaterias'];
   }

  ngOnInit() {
  this.atualiza();
  }

  atualiza() {
    this.minhasMaterias.forEach( x => {
      this.materias = this.materias.filter(f =>  f.id !== x.id);
    });
    this.materia = {id: '', nome: ''};
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.atualiza();
  }


  save() {
    const matricula: MatriculaDTO = {
      materia_id: this.materia.id,
      usuario_id: this.usuarioLogado.id
    };
    if (this.usuarioLogado.funcao.includes('Professor')){
      this.service.matricula(matricula, 'professor').subscribe(response => {
        this.minhasMaterias.push(this.materia);
        this.atualizaGoMinhasMaterias();
       });
    } else {
      this.service.matricula(matricula, 'alunos').subscribe(response => {
        this.minhasMaterias.push(this.materia);
        this.atualizaGoMinhasMaterias();
      });
   }
  }
  atualizaGoMinhasMaterias() {
    this.atualiza();
    this.router.navigate(['/minhas-materias']);
  }
}
