import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private service: TransferenciaService){

  }
  title = 'angular-bytebank';

  transferir($event: any){
    console.log($event);
    // const transferencia = {...$event, data: new Date()}
    // this.transferencias.push(transferencia);
    this.service.adicionar($event);
  }
}
