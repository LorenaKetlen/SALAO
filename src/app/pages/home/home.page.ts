import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public appPages = [
    { title: 'SERVIÇOS DISPONÍVEIS', url: '../tipo-servico', icon: 'list' },
    { title: 'SOLICITAÇÕES', url: '../servico', icon: 'diamond' },
    { title: 'MEUS DADOS', url: '../meus-dados', icon: 'person' },
    { title: 'Sair', url: '../login', icon: 'exit' }
  ];
  constructor() {}
  public isAdmin = true;

  ngOnInit(){
    let idLog = JSON.parse(localStorage.getItem("userIn"));
    if(idLog == 1){
      this.isAdmin = true;
      this.appPages = [
        { title: 'SERVIÇOS DISPONÍVEIS', url: '../tipo-servico', icon: 'list' },
        { title: 'MEUS DADOS', url: '../meus-dados', icon: 'person' },
        { title: 'Sair', url: '../login', icon: 'exit'}
      ];
    }else{
      this.appPages = [
        { title: 'SERVIÇOS DISPONÍVEIS', url: '../tipo-servico', icon: 'list' },
        { title: 'SOLICITAÇÕES', url: '../servico', icon: 'diamond' },
        { title: 'MEUS DADOS', url: '../meus-dados', icon: 'person' },
        { title: 'Sair', url: '../login', icon: 'exit' }
      ];
      this.isAdmin = false;
    }
  }
}