import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicoPageRoutingModule } from './servico-routing.module';

import { ServicoPage } from './servico.page';
import { HeaderGeneralComponent } from 'src/app/components/header-general/header-general.component';
import { AdicionarServicoPage } from '../adicionar-servico/adicionar-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicoPageRoutingModule
  ],
  declarations: [ServicoPage, HeaderGeneralComponent, AdicionarServicoPage]
})
export class ServicoPageModule {}
