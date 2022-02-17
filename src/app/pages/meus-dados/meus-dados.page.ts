import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.page.html',
  styleUrls: ['./meus-dados.page.scss'],
})
export class MeusDadosPage implements OnInit {

  idLog:string;

  user = {
    id: null,
    nome: null,
    email: null,
    endereco: null,
    telefone: null,
    senha: null
  };

  public formGroup: FormGroup;
  isSubmitted = false;
  constructor(public userService: UserService, private formBuilder: FormBuilder, public toastController: ToastController, public navController: NavController) {
    this.formGroup = this.formBuilder.group({
      'nome':['', Validators.compose([
        Validators.required
      ])],
      'endereco':['', Validators.compose([
        Validators.required
      ])],
      'telefone':['', Validators.compose([
        Validators.required,
        Validators.minLength(15)
      ])],
      'email':['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      'senha':['', Validators.compose([
      Validators.required,
      Validators.minLength(5)])]
    })
   }
  ngOnInit() {
    this.idLog = JSON.parse(localStorage.getItem('userIn'));
    if(parseInt(this.idLog)>= 0){
      this.user = this.userService.buscar(parseInt(this.idLog));
      this.formGroup.get('nome').setValue(this.user.nome);
      this.formGroup.get('email').setValue(this.user.email);
      this.formGroup.get('endereco').setValue(this.user.endereco);

      this.formGroup.get('telefone').setValue(this.user.telefone);

      this.formGroup.get('senha').setValue(this.user.senha);
    }
  }
  get errorControl(){
    return this.formGroup.controls;
  }

  async submitForm(){
    this.isSubmitted = true;
    if(this.formGroup.valid) {
      this.user.email = this.formGroup.value.email;
      this.user.nome = this.formGroup.value.nome;
      this.user.endereco = this.formGroup.value.endereco;
      this.user.telefone = this.formGroup.value.telefone;
      this.user.senha = this.formGroup.value.senha;
      this.user.id = localStorage.getItem('userIn');
      this.userService.salvar(this.user);
      this.AlertMSG('Registro Salvo');
      this.navController.navigateBack('/home');
    }
    else
      this.AlertMSG("Valores invalidos");
  }

  async AlertMSG(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }
}
