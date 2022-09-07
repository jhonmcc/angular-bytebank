import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listTransferencia: any[];

  constructor() {
    this.listTransferencia = [];
  }

  get transferencias(){
    return this.listTransferencia;
  }

  adicionar(transferencia: any){
    this.hidratar(transferencia);
    this.listTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

}
