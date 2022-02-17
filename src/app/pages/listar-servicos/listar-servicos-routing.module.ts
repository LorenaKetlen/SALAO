import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarServicosPage } from './listar-servicos.page';

const routes: Routes = [
  {
    path: '',
    component: ListarServicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarServicosPageRoutingModule {}
