import { Transferencia } from './../../models/transferencia.model';
import { TransferenciaService } from './../../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent {
  // declarando output pra cuspir informacao ao app-root
  @Output() aoTranferir = new EventEmitter<any>();

  constructor(private service: TransferenciaService, private router: Router) { }

  valor: number = 0;
  destino: number = 0;

  transferir(){
    console.log("click transferir");
    // this.aoTranferir.emit({valor: this.valor, destino: this.destino});
    const objTransferir: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(objTransferir).subscribe(resultado => {
      console.log(resultado)
      // this.limparCampos();
      // this.router.navigate(['extrato'], ['othersParameters']); passagen de parametros
      this.router.navigateByUrl('extrato');
    },
      (err) => console.error(err)
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
