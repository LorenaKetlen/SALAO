import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroUserPageRoutingModule } from './cadastro-user-routing.module';

import { CadastroUserPage } from './cadastro-user.page';
import { BrMaskerModule } from 'br-mask';
import { HeaderGeneralComponent } from 'src/app/components/header-general/header-general.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrMaskerModule,
    IonicModule,
    CadastroUserPageRoutingModule
  ],
  declarations: [CadastroUserPage, HeaderGeneralComponent]
})
export class CadastroUserPageModule {}
