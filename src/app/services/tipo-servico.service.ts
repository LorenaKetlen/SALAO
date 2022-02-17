import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoServicoService {
  constructor() {
    let tipos =JSON.parse(localStorage.getItem("tbTipos"));
    if(!tipos){
      tipos = [];
      localStorage.setItem("tbTipos", JSON.stringify(tipos));
    }
 }
  salvar(tipo: any){
    let tipos = JSON.parse(localStorage.getItem('tbTipos'));
    if(tipo.id){
      let i = tipos.findIndex(t => t.id == tipo.id)
      tipos[i] = tipo;
    }
    else{
      tipo.id = new Date().getTime();
      tipos.push(tipo);
    }
    localStorage.setItem("tbTipos", JSON.stringify(tipos));
  }
  listar(){
    let tipos = JSON.parse(localStorage.getItem('tbTipos'));
    return tipos;
  }
  buscar(id: number){
    let tipos = JSON.parse(localStorage.getItem('tbTipos'));
    let tipo = tipos.find(t => t.id == id);
    return tipo;
  }
  excluir(tipo: any){
    let tipos = JSON.parse(localStorage.getItem('tbTipos'));
    tipos = tipos.filter(t => t.id != tipo.id);
    localStorage.setItem("tbTipos", JSON.stringify(tipos));
  }
}
