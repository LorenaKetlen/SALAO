import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  users: any=[];
  user={
    id:null,
    nome: null,
    email:null,
    endereco:null,
    telefone:null,
    senha:null
  }
  userLog: any;
  senha: string;
  email: string;
  public formGroup: FormGroup;
  constructor(private menuCtrl: MenuController, private navController: NavController, 
    private toastController:ToastController, private userService: UserService, private formBuilder: FormBuilder) {
      this.formGroup = this.formBuilder.group({
        'email':['', Validators.compose([
        Validators.required,
        ])],
        'senha':['', Validators.compose([
          Validators.required,
        ])]
      })
  }
  ngOnInit() {
    this.userService.desconectar();
  }
  validar (){
    this.email = this.formGroup.value.email;
    this.senha = this.formGroup.value.senha;
    let conectar = this.userService.EmailBusca(this.email);
    if (conectar != null){
      if(conectar.senha === this.senha){
        this.userService.conectar(conectar.id);
        this.menuCtrl.enable(true);
        this.navController.navigateBack('/home');
      }else{
        this.LoginInvalido("Senha incorreta, tente novamente.");
      }
    }else{
      this.LoginInvalido("E-mail inválido, tente novamente");
    }
  }
  async LoginInvalido(mensagem:string){
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000});
    toast.present(); }
  async ionViewWillEnter(){
    this.menuCtrl.enable(false); }
  get errorControl(){
    return this.formGroup.controls; }
}
