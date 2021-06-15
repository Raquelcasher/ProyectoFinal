import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

    /*Menu y cambio de fondos*/
  flag:boolean=true;

  cambiarFlag(){
    
      this.flag=!this.flag;
    
    
  }

}
