import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoServicoPage } from './tipo-servico.page';

const routes: Routes = [
  {
    path: '',
    component: TipoServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoServicoPageRoutingModule {}
