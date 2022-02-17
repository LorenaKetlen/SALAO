import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarServicoPageRoutingModule } from './adicionar-servico-routing.module';

import { AdicionarServicoPage } from './adicionar-servico.page';
import { HeaderGeneralComponent } from 'src/app/components/header-general/header-general.component';
import { TipoServicoService } from 'src/app/services/tipo-servico.service';
import { ServicoService } from 'src/app/services/servico.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdicionarServicoPageRoutingModule
  ],
  declarations: [AdicionarServicoPage, HeaderGeneralComponent, TipoServicoService, ServicoService]
})
export class AdicionarServicoPageModule {}
