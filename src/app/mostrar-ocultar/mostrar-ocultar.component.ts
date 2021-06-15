import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-ocultar',
  templateUrl: './mostrar-ocultar.component.html',
  styleUrls: ['./mostrar-ocultar.component.css']
})
export class MostrarOcultarComponent{
  
  mostrar:boolean=false;
  mensaje_enlace:String="Leer más";
  mostrarOcultar() {
    if(this.mostrar){
      this.mostrar=false;
      this.mensaje_enlace="Leer más";
    }else{
      this.mostrar=true;
      this.mensaje_enlace="Leer menos";

    }
  }
}
