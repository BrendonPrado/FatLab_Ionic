import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'reservar-lab', loadChildren: './reservar-lab/reservar-lab.module#ReservarLabPageModule' },
  { path: 'matricular', loadChildren: './matricular/matricular.module#MatricularPageModule' },
  { path: 'cadastrar-novo-usuario', loadChildren: './cadastrar-novo-usuario/cadastrar-novo-usuario.module#CadastrarNovoUsuarioPageModule' },
  { path: 'minhas-materias', loadChildren: './minhas-materias/minhas-materias.module#MinhasMateriasPageModule' },
  { path: 'materias-agora', loadChildren: './materias-agora/materias-agora.module#MateriasAgoraPageModule' },
  { path: 'gerenciar-usuarios', loadChildren: './gerenciar-usuarios/gerenciar-usuarios.module#GerenciarUsuariosPageModule' },
  { path: 'cadastrar-lab', loadChildren: './cadastrar-lab/cadastrar-lab.module#CadastrarLabPageModule' },
  { path: 'cadastrar-materia', loadChildren: './cadastrar-materia/cadastrar-materia.module#CadastrarMateriaPageModule' },
  { path: 'gerenciar-lab', loadChildren: './gerenciar-lab/gerenciar-lab.module#GerenciarLabPageModule' },
  { path: 'gerenciar-materia', loadChildren: './gerenciar-materia/gerenciar-materia.module#GerenciarMateriaPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
