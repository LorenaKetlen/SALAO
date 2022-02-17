import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarTipoPage } from './adicionar-tipo.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarTipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarTipoPageRoutingModule {}
