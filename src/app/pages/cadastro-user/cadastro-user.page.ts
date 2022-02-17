import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.page.html',
  styleUrls: ['./cadastro-user.page.scss'],
})
export class CadastroUserPage implements OnInit {

  id: string;
  user ={
    id: null,
    nome: null,
    email: null,
    endereco: null,
    telefone: null,
    senha: null
  }

  ngOnInit() {
  }
  async ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }
  public form: FormGroup;
  public isSubmitted: boolean; 
  constructor(private navController: NavController, public toastController: ToastController,
     private menuCtrl: MenuController, private userService: UserService, private formBuilder: FormBuilder) { 
      this.form = this.formBuilder.group({
        'nome':['', Validators.compose([
        Validators.required,
        ])],
        'email':['', Validators.compose([
          Validators.required,
          Validators.email
        ])],
        'endereco':['', Validators.compose([
          Validators.required,
        ])],
        
        'telefone':['', Validators.compose([
          Validators.required,
        ])],
        
        'senha':['', Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])]
      })
    }

  async submitForm(){
    this.isSubmitted = true;
    if(!this.userService.EmailBusca(this.form.value.email)){
      this.user.nome = this.form.value.nome; 
      this.user.email = this.form.value.email;
      this.user.telefone = this.form.value.telefone; 
      this.user.endereco = this.form.value.endereco; 
      this.user.senha = this.form.value.senha; 
      this.user.id = this.id;
      this.userService.salvar(this.user);
      let user = this.userService.EmailBusca(this.user.email);
      console.log(user.id);
      this.userService.conectar(user.id);
      this.AlertMSG('Registro Salvo');
      this.navController.navigateBack('/home');
    }
    else
      this.AlertMSG("Email já cadastrado");
  }
  async AlertMSG(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }
  get errorControl(){
    return this.form.controls;
  }
}
