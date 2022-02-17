import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { TipoServicoService } from 'src/app/services/tipo-servico.service';

@Component({
  selector: 'app-tipo-servico',
  templateUrl: './tipo-servico.page.html',
  styleUrls: ['./tipo-servico.page.scss'],
})
export class TipoServicoPage implements OnInit {
  tipos: any = [];
  constructor(public alertController: AlertController, public toastController: ToastController, public tipoServicoService: TipoServicoService) { }
  public isAdmin = false;
  ngOnInit() {
    let idLog = JSON.parse(localStorage.getItem("userIn"));
    if(idLog == 1){
      this.isAdmin = true;
    }else{
      this.isAdmin = false;
    }
  }

  async ionViewWillEnter(){
    this.ExibirTipos();
  }

  ExibirTipos(){
    this.tipos = this.tipoServicoService.listar();
    if(!this.tipos){
      this.tipos = [];
      localStorage.setItem("tbTipos", JSON.stringify(this.tipos));
    }
  }

  async excluirTipoServico(id: any){
    let tipo = this.tipoServicoService.buscar(id);   

    const alert = await this.alertController.create({
      header: 'Excluir',
      message: "O tipo de Servico será excluído",
      buttons: [{text: 'OK', role: 'cancel'},
        {text: 'Excluir',
          handler: ()  =>{
            this.tipoServicoService.excluir(tipo);
            this.ExibirTipos();
            this.excluirOpcao();
          }
        }
      ]
    });
    await alert.present();
  }

  async excluirOpcao(){
    const toast = await this.toastController.create({
      message: "Tipo de Servico excluído",
      duration: 2000
    });
    toast.present();
  }
}