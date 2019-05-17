import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioResolver } from 'src/guards/resolvers/usuario.resolver';
import { AuthGuardService } from 'src/guards/canActivate/auth.guard';
import { ProfessorGuard } from 'src/guards/canActivate/professor.guard';
import { AlunoProfessorGuard } from 'src/guards/canActivate/aluno-professor.guard';
import { AdminGuard } from 'src/guards/canActivate/admin.guard';
import { AppComponent } from './app.component';
import { MinhasMateriasResolver } from 'src/guards/resolvers/minhas-materias.resolver';
import { AllMateriasResolver } from 'src/guards/resolvers/all-materias.resolver';
import { AllLabsResolver } from 'src/guards/resolvers/all-labs.resolver';
import { AllUsuariosResolver } from 'src/guards/resolvers/all-usuarios.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
   loadChildren: './home/home.module#HomePageModule'},
  { path: 'login',
   loadChildren: './login/login.module#LoginPageModule',
  },
  { path: 'cadastro',
   loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  {
   path: 'landing',
   loadChildren: './landing/landing.module#LandingPageModule',
   canActivate: [AuthGuardService],
   resolve: {
   usuario : UsuarioResolver
    }
  },
  {
    path: 'reservar-lab',
    loadChildren: './reservar-lab/reservar-lab.module#ReservarLabPageModule' ,
    canActivate: [ProfessorGuard]
  },
  {
   path: 'matricular',
   loadChildren: './matricular/matricular.module#MatricularPageModule',
   canActivate: [AlunoProfessorGuard],
   resolve: {materias: AllMateriasResolver,
    minhasMaterias: MinhasMateriasResolver}
    },
  {
  path: 'cadastrar-novo-usuario',
  loadChildren: './cadastrar-novo-usuario/cadastrar-novo-usuario.module#CadastrarNovoUsuarioPageModule',
  canActivate: [AdminGuard]
 },
  {
    path: 'minhas-materias',
    loadChildren: './minhas-materias/minhas-materias.module#MinhasMateriasPageModule',
    canActivate: [AlunoProfessorGuard],
    resolve: {materias: MinhasMateriasResolver}
  },
  {
  path: 'materias-agora',
  loadChildren: './materias-agora/materias-agora.module#MateriasAgoraPageModule',
  canActivate: [AlunoProfessorGuard]
 },
  { path: 'gerenciar-usuarios',
   loadChildren: './gerenciar-usuarios/gerenciar-usuarios.module#GerenciarUsuariosPageModule',
  canActivate: [AdminGuard],
  resolve: {usuarios: AllUsuariosResolver}
 },
  { path: 'cadastrar-lab',
   loadChildren: './cadastrar-lab/cadastrar-lab.module#CadastrarLabPageModule',
  canActivate: [AdminGuard]
 },
  {
    path: 'cadastrar-materia',
    loadChildren: './cadastrar-materia/cadastrar-materia.module#CadastrarMateriaPageModule',
    canActivate: [AdminGuard]
 },
  {
  path: 'gerenciar-lab',
  loadChildren: './gerenciar-lab/gerenciar-lab.module#GerenciarLabPageModule',
  canActivate: [AdminGuard],
  resolve: {labs: AllLabsResolver}
},
  {
    path: 'gerenciar-materia',
     loadChildren: './gerenciar-materia/gerenciar-materia.module#GerenciarMateriaPageModule',
    canActivate: [AdminGuard],
    resolve: {materias: AllMateriasResolver}
  },
  {
    path: 'perfil',
    loadChildren: './perfil/perfil.module#PerfilPageModule',
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
