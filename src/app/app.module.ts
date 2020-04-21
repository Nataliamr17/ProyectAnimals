import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador/buscador.component';
import { FichaComponent } from './ficha/ficha/ficha.component';
import { LoginComponent } from './login/login/login.component';
import { MensajesComponent } from './mensajes/mensajes/mensajes.component';
import { PrincipalComponent } from './principal/principal/principal.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    FichaComponent,
    LoginComponent,
    MensajesComponent,
    PrincipalComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
