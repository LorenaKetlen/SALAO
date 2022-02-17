import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'INICIO', url: '../home', icon: 'home' },
    { title: 'SERVIÇOS DISPONÍVEIS', url: '../tipo-servico', icon: 'list' },
    { title: 'SOLICITAÇÕES', url: '../servico', icon: 'diamond' },
    { title: 'MEUS DADOS', url: '../meus-dados', icon: 'person' },
    { title: 'Sair', url: '../login', icon: 'exit' }
  ];
  constructor() {}
   
  ngOnInit(){
    let idLog = JSON.parse(localStorage.getItem("userIn"));
    if(idLog == 1){
      this.appPages = [
        { title: 'INICIO', url: '../home', icon: 'home' },
        { title: 'SERVIÇOS DISPONÍVEIS', url: '../tipo-servico', icon: 'list' },
        { title: 'MEUS DADOS', url: '../meus-dados', icon: 'person' },
        { title: 'Sair', url: '../login', icon: 'exit'}
      ];
    }else{
      this.appPages = [
        { title: 'INICIO', url: '../home', icon: 'home' },
        { title: 'SERVIÇOS DISPONÍVEIS', url: '../tipo-servico', icon: 'list' },
        { title: 'SOLICITAÇÕES', url: '../servico', icon: 'diamond' },
        { title: 'MEUS DADOS', url: '../meus-dados', icon: 'person' },
        { title: 'Sair', url: '../login', icon: 'exit' }
      ];
    }
  }
}
