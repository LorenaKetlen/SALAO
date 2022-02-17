import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoServicoService } from 'src/app/services/tipo-servico.service';
@Component({
  selector: 'app-adicionar-tipo',
  templateUrl: './adicionar-tipo.page.html',
  styleUrls: ['./adicionar-tipo.page.scss'],
})
export class AdicionarTipoPage implements OnInit {

  id:string;
  tipo = {
    id: null, 
    valor: null,   
    descricao: null
  }
  public formGroup: FormGroup;
  constructor(private navController: NavController, private activatedRoute: ActivatedRoute, public toastController: 
    ToastController, private tipoService: TipoServicoService, private formBuilder: FormBuilder) { 
    this.formGroup = this.formBuilder.group({
      'descricao':['', Validators.compose([
      Validators.required,
    ])],
    'valor':['', Validators.compose([
      Validators.required,
    ])]
  
    })
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.tipo = this.tipoService.buscar(parseInt(this.id))
      this.formGroup.get('descricao').setValue(this.tipo.descricao);
      this.formGroup.get('valor').setValue(this.tipo.valor);

    }
  }
  async submitForm(){    
    this.tipo.descricao = this.formGroup.value.descricao; 
    this.tipo.valor = this.formGroup.value.valor; 
    this.tipo.id = this.id;
    this.tipoService.salvar(this.tipo);   
    this.AlertMSG('Registro salvo');
    this.navController.navigateBack('/tipo-servico');
  }
  async AlertMSG(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }
}
