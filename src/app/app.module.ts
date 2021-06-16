import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//PARA PODER REALIZAR LAS RUTAS:
//import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MostrarOcultarComponent } from './mostrar-ocultar/mostrar-ocultar.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({

  declarations: [
    AppComponent,
    MostrarOcultarComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    // AQUÍ TAMBIÉN
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
