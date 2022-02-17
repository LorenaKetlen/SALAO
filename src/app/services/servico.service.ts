import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  constructor() { }

  salvar (servico:any){
    let servicos= JSON.parse(localStorage.getItem('tbContas'));
    if(servico.id){
      let i = servicos.findIndex(c => c.id == servico.id);
      servicos[i]= servico;
    }else{
      servico.id= new Date().getTime();
      servicos.push(servico);
    }
    localStorage.setItem('tbContas', JSON.stringify(servicos));
  }

  listar(){
    let servicos= JSON.parse(localStorage.getItem('tbContas'));
    if(!servicos){
      servicos=[];
      localStorage.setItem('tbContas', JSON.stringify(servicos));
    }
    return servicos;
  }

  listarPessoa(idPessoa: number){
    let servicos= JSON.parse(localStorage.getItem('tbContas'));
    let array = [null];
    for (let i = 0; i < servicos.length; i++) {
      if(servicos[i].idUser == idPessoa){
        array.push(servicos[i]);
      }
    }
    array.shift();
    return array;
  }


  buscarPorDia (dia: string){
    let servicos= JSON.parse(localStorage.getItem('tbContas'));
    let servico= servicos.find(c => c.dataAgendamento === dia);
    console.log(servico);
    return servico;
  }

  buscarPorHorario (horario: string){
    let servicos= JSON.parse(localStorage.getItem('tbContas'));
    let servico= servicos.find(c => c.horario === horario);
    console.log(servico);
    return servico;
  }

  buscar (id: number){
    let servicos= JSON.parse(localStorage.getItem('tbContas'));
    let servico= servicos.find(c => c.id == id);
    return servico;
  }
  
  exclui(servico:any){
    let servicos= JSON.parse(localStorage.getItem('tbContas'));
    servicos = servicos.filter(c => c.id != servico.id);
    localStorage.setItem('tbContas',JSON.stringify(servicos));
  }
}
