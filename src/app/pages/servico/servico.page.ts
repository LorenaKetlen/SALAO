import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { ServicoService } from 'src/app/services/servico.service';
import { TipoServicoService } from 'src/app/services/tipo-servico.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.page.html',
  styleUrls: ['./servico.page.scss'],
})
export class ServicoPage implements OnInit {
  servicos: any = [];
  constructor(public alertController: AlertController, public toastController: ToastController, public servicoService: ServicoService,
    public tipoService: TipoServicoService) { }
  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.ExibirServicos();
  }
  
  ExibirServicos(){
    let idLog = JSON.parse(localStorage.getItem("userIn"));
    this.servicos = this.servicoService.listarPessoa(idLog);
    for (let i = 0; i < this.servicos.length; i++) {
      let tipo = this.tipoService.buscar(this.servicos[i].idTipo);
      this.servicos[i].descricao = tipo.descricao;
    }
    if(!this.servicos){
      this.servicos = [];
      localStorage.setItem("tbContas", JSON.stringify(this.servicos));
    }
  }

  async excluirServico(id: any){
    let servico = this.servicoService.buscar(id);   
    const alert = await this.alertController.create({
      header: 'CANCELAR',
      message: "A SOLICITAÇÃO SERÁ CANCELADA",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'   },
        {
          text: 'OK',
          handler: ()  =>{
            this.servicoService.exclui(servico);
            this.ExibirServicos();
            this.excluirOpcao();
          }
        }
      ]
    });
    await alert.present();
  }
  async excluirOpcao(){ //cancela a solicitação depois de confirmar
    const toast = await this.toastController.create({
      message: "SOLICITAÇÃO CANCELADA!",
      duration: 2000
    });
    toast.present();
  }
}
