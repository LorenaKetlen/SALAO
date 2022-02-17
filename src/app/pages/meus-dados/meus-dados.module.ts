import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusDadosPageRoutingModule } from './meus-dados-routing.module';

import { MeusDadosPage } from './meus-dados.page';
import { BrMaskerModule } from 'br-mask';
import { HeaderFormComponent } from 'src/app/components/header-form/header-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BrMaskerModule,
    MeusDadosPageRoutingModule
  ],
  declarations: [MeusDadosPage, HeaderFormComponent]
})
export class MeusDadosPageModule {}
