import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FichaComponent } from './ficha/ficha/ficha.component';
import { LoginComponent } from './login/login/login.component';
import { MensajesComponent } from './mensajes/mensajes/mensajes.component';

@NgModule({
  declarations: [
    AppComponent,
    FichaComponent,
    LoginComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
