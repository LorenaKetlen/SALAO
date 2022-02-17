import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { ServicoService } from 'src/app/services/servico.service';
import { TipoServicoService } from 'src/app/services/tipo-servico.service';
import { format, parseISO } from 'date-fns';
@Component({
  selector: 'app-adicionar-servico',
  templateUrl: './adicionar-servico.page.html',
  styleUrls: ['./adicionar-servico.page.scss'],
})
export class AdicionarServicoPage implements OnInit {

  id: string;
  servicos: any=[];
  servico={
    id:null,
    idTipo: null,
    dataAgendamento:null,
    horario: null,
    formapgt: null,
    idUser: null
    
  }
  tipos: any=[];
  public formGroup: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, private toastController: ToastController,  private servicoService: ServicoService, 
    private tipoServicoService: TipoServicoService,  private formBuilder: FormBuilder) { 
    this.formGroup = this.formBuilder.group({
      'idTipo':['', Validators.compose([
        Validators.required,
      ])],

      'dataAgendamento':['', Validators.compose([
        Validators.required,
      ])],
      'horario':['', Validators.compose([
        Validators.required,
      ])],
      'formapgt':['', Validators.compose([
        Validators.required,
      ])]
    })
  }
  
  async submitForm(){
    let idLog = JSON.parse(localStorage.getItem("userIn"));
    if(!this.servicoService.buscarPorHorario(this.formGroup.value.horario) || !this.servicoService.buscarPorDia(this.formGroup.value.dataAgendamento)){
      this.servico.idTipo = this.formGroup.value.idTipo;
      this.servico.dataAgendamento = this.formGroup.value.dataAgendamento;
      this.servico.horario = this.formGroup.value.horario;
      this.servico.formapgt = this.formGroup.value.formapgt;
      this.servico.idUser = idLog;
      this.servico.id = this.id;
      this.servicoService.salvar(this.servico); 
      this.AlertMSG('Agendamento Solicitado');
      this.navController.navigateBack('/servico');
    }else
      this.AlertMSG('Já existe alguém com o mesmo horário e mesma data');
  }
  
  ngOnInit() {
    this.tipos = this.tipoServicoService.listar();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.servico = this.servicoService.buscar(parseInt(this.id));
      this.formGroup.get('idTipo').setValue(this.servico.idTipo);
      this.formGroup.get('dataAgendamento').setValue(this.servico.dataAgendamento);
      this.formGroup.get('horario').setValue(this.servico.horario);
      this.formGroup.get('formapgt').setValue(this.servico.formapgt);
    }
  }

  async AlertMSG(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }
 formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }
}
