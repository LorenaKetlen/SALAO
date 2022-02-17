import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarServicosPageRoutingModule } from './listar-servicos-routing.module';

import { ListarServicosPage } from './listar-servicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarServicosPageRoutingModule
  ],
  declarations: [ListarServicosPage]
})
export class ListarServicosPageModule {}
