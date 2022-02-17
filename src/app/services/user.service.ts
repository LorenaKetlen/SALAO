import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 
    let users = JSON.parse(localStorage.getItem("tbUsuarios"));
    if(!users){
      users = [
      {"id": 1, "nome": "adm", "email": "adm@adm", "telefone":"00000000000", "endereco": "adm", "senha": "admin"}];
      localStorage.setItem("tbUsuarios", JSON.stringify(users));
    }
    let logado =JSON.parse(localStorage.getItem("userIn"));
    if(!logado){
      localStorage.setItem('userIn', null);
    }
  }

  desconectar(){
    localStorage.setItem('userIn', null);
  }
  
  conectar(id: String){
    console.log(id);
    localStorage.setItem('userIn', JSON.stringify(id));
  }

  salvar (user:any){
    let users = JSON.parse(localStorage.getItem('tbUsuarios'));
    if(user.id){
      let i = users.findIndex(c => c.id == user.id);
      users[i]= user;
    }else{
      user.id= new Date().getTime();
      users.push(user);
    }
    localStorage.setItem('tbUsuarios', JSON.stringify(users));
  }

  listar(){
    let users= JSON.parse(localStorage.getItem('tbUsuarios'));
    if(!users){
      users=[];
      localStorage.setItem('tbUsuarios', JSON.stringify(users));
    }
    return users;
  }

  buscar (id: number){
    let users= JSON.parse(localStorage.getItem('tbUsuarios'));
    let user= users.find(c => c.id == id);
    return user;
  }
  
  EmailBusca (email:string){
    console.log(email);
    let users= JSON.parse(localStorage.getItem('tbUsuarios'));
    let user= users.find(c => c.email==email);
    if(!user){
      return null;
    }else{
      return user;
    }
  }

  SenhaBusca (senha:string){
    let users= JSON.parse(localStorage.getItem('tbUsuarios'));
    let user= users.find(c => c.senha==senha);
    if(!user){
      return false;
    }else{
      return true;
    }
  }

  excluir(user:any){
    let users= JSON.parse(localStorage.getItem('tbUsuarios'));
    users = users.filter(c => c.id != user.id);
    localStorage.setItem('tbUsuarios',JSON.stringify(users));
  }
}
