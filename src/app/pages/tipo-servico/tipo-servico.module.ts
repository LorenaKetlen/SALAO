import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoServicoPageRoutingModule } from './tipo-servico-routing.module';

import { TipoServicoPage } from './tipo-servico.page';
import { TipoServicoService } from 'src/app/services/tipo-servico.service';
import { HeaderGeneralComponent } from 'src/app/components/header-general/header-general.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoServicoPageRoutingModule
  ],
  declarations: [TipoServicoPage, HeaderGeneralComponent, TipoServicoService]
})
export class TipoServicoPageModule {}
