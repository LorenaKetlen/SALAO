import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'adicionar-servico',
    loadChildren: () => import('./pages/adicionar-servico/adicionar-servico.module').then( m => m.AdicionarServicoPageModule)
  },
  {
    path: 'adicionar-servico/:id',
    loadChildren: () => import('./pages/adicionar-servico/adicionar-servico.module').then( m => m.AdicionarServicoPageModule)
  },
  
  {
    path: 'adicionar-tipo',
    loadChildren: () => import('./pages/adicionar-tipo/adicionar-tipo.module').then( m => m.AdicionarTipoPageModule)
  },

  {
    path: 'adicionar-tipo/:id',
    loadChildren: () => import('./pages/adicionar-tipo/adicionar-tipo.module').then( m => m.AdicionarTipoPageModule)
  },
  
  {
    path: 'cadastro-user',
    loadChildren: () => import('./pages/cadastro-user/cadastro-user.module').then( m => m.CadastroUserPageModule)
  },
  {
    path: 'servico',
    loadChildren: () => import('./pages/servico/servico.module').then( m => m.ServicoPageModule)
  },
  {
    path: 'tipo-servico',
    loadChildren: () => import('./pages/tipo-servico/tipo-servico.module').then( m => m.TipoServicoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'meus-dados',
    loadChildren: () => import('./pages/meus-dados/meus-dados.module').then( m => m.MeusDadosPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: 'meus-dados',
    loadChildren: () => import('./pages/meus-dados/meus-dados.module').then( m => m.MeusDadosPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
