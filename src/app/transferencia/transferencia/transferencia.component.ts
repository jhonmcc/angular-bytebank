import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent {
  constructor() { }

  // declarando output pra cuspir informacao ao app-root
  @Output() aoTranferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  transferir(){
    console.log("click transferir");
    this.aoTranferir.emit({valor: this.valor, destino: this.destino});
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
