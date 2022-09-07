import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TransferenciaComponent } from './transferencia/transferencia/transferencia.component';
import { ExtratoComponent } from './transferencia/extrato/extrato.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    TransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
