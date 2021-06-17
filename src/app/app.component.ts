import {Component, HostListener, ElementRef} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as xml2js from 'xml2js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  now: Date = new Date();
  counter(i: number) {
    return new Array(i);
}
  flag: boolean = true;
  switchButton = document.getElementById('switch');
  windowScrolled: boolean = true;
  public xmlItems: any;
  public xmlItems1: any;
  public xmlItems2: any;
  public xmlItems3: any;
  public xmlItems4: any;
  public xmlItems5: any;
  public xmlItems6: any;
  public xmlItems7: any;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
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

  constructor(private scroll: ViewportScroller, private _http: HttpClient) {
    this.loadXML();
  }

  ngOnInit() {

    setInterval(() => {

      this.now = new Date();

    }, 1000);
  }

  cambiarFlag() {
    this.flag = !this.flag;
  }

  loadXML() {
    this._http.get('/assets/fotos.xml',
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        responseType: 'text'
      })
      .subscribe((data) => {
        this.parseXML(data)
        .then((data) => {
          this.xmlItems = data[0];
          this.xmlItems1 = data[1];
          this.xmlItems2 = data[2];
          this.xmlItems3 = data[3];
          this.xmlItems4 = data[4];
          this.xmlItems5 = data[5];
          this.xmlItems6 = data[6];
          this.xmlItems7 = data[7];
      });
    });
  }
  parseXML(data) {
    return new Promise(resolve => {
      var k: string | number,
        arr = [],
        xmlItems=[],
        xmlItems1=[],
        xmlItems2=[],
        xmlItems3=[],
        xmlItems4=[],
        xmlItems5=[],
        xmlItems6=[],
        xmlItems7=[],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err, result) {
        var obj = result.Fotos;
        for (k in obj.img) {
          var item = obj.img[k];
          if (item.cod[0] == 1) {
            xmlItems.push(
              {
                //cod: item.cod[0], Esto ya no te hace falta porque ya esta clasificado en su array
                name: item.name[0],
                url: item.url[0],
                descrip: item.descrip[0]
              }
            )
          } else if (item.cod[0] == 2) {
            xmlItems1.push(
              {
                //cod: item.cod[0], Esto ya no te hace falta porque ya esta clasificado en su array
                name: item.name[0],
                url: item.url[0],
                descrip: item.descrip[0]
              }
            )
          } else if (item.cod[0] == 3) {
            xmlItems2.push(
              {
                //cod: item.cod[0], Esto ya no te hace falta porque ya esta clasificado en su array
                name: item.name[0],
                url: item.url[0],
                descrip: item.descrip[0]
              }
            )
          } else if (item.cod[0] == 4) {
            xmlItems3.push(
              {
                //cod: item.cod[0], Esto ya no te hace falta porque ya esta clasificado en su array
                name: item.name[0],
                url: item.url[0],
                descrip: item.descrip[0]
              }
            )
          } else if (item.cod[0] == 5) {
            xmlItems4.push(
              {
                //cod: item.cod[0], Esto ya no te hace falta porque ya esta clasificado en su array
                name: item.name[0],
                url: item.url[0],
                descrip: item.descrip[0]
              }
            )
          } else if (item.cod[0] == 6) {
            xmlItems5.push(
              {
                //cod: item.cod[0], Esto ya no te hace falta porque ya esta clasificado en su array
                name: item.name[0],
                url: item.url[0],
                descrip: item.descrip[0]
              }
            )
          } else if (item.cod[0] == 7) {
            xmlItems6.push(
              {
                //cod: item.cod[0], Esto ya no te hace falta porque ya esta clasificado en su array
                name: item.name[0],
                url: item.url[0],
                descrip: item.descrip[0]
              }
            )
          }
          else if (item.cod[0] == 8) {
            xmlItems7.push(
              {
                //cod: item.cod[0], Esto ya no te hace falta porque ya esta clasificado en su array
                name: item.name[0],
                url: item.url[0],
                descrip: item.descrip[0]
              }
            )
          }
        }          
      arr.push(xmlItems,xmlItems1,xmlItems2,xmlItems3,xmlItems4,xmlItems5,xmlItems6,xmlItems7);
      console.log(arr);
      resolve(arr);
      });
    });
  }
}



         