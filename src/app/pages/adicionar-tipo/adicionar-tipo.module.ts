import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarTipoPageRoutingModule } from './adicionar-tipo-routing.module';

import { AdicionarTipoPage } from './adicionar-tipo.page';
import { BrMaskerModule } from 'br-mask';
import { HeaderFormComponent } from 'src/app/components/header-form/header-form.component';
import { TipoServicoService } from 'src/app/services/tipo-servico.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BrMaskerModule,
    AdicionarTipoPageRoutingModule
  ],
  declarations: [AdicionarTipoPage, HeaderFormComponent, TipoServicoService]
})
export class AdicionarTipoPageModule {}
