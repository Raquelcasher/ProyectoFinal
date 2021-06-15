import { Component, HostListener, ElementRef} from '@angular/core';
import { ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  now:Date=new Date();
  flag:boolean=true;
  switchButton= document.getElementById('switch');;
  windowScrolled: boolean=true;
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
   scrollToTop() {
      (function smoothscroll() {
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 8));
          }
      })();
  }
  constructor(private scroll: ViewportScroller) { }

  ngOnInit(){
 
    setInterval(() => {
 
      this.now = new Date();
 
    }, 1000);
  }
  cambiarFlag(){ 
    this.flag=!this.flag;
  }
 

}
