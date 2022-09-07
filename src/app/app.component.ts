import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bytebank';
  transferencias: any[] = [];

  transferir($event: any){
    console.log($event);
    const transferencia = {...$event, data: new Date()}
    this.transferencias.push(transferencia);
  }
}
