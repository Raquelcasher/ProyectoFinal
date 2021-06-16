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
  flag: boolean = true;
  switchButton = document.getElementById('switch');
  windowScrolled: boolean = true;
  public xmlItems: any;

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
            this.xmlItems = data;
          });
      });
  }
  parseXML(data) {
    return new Promise(resolve => {
      var k: string | number,
        arr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err, result) {
        var obj = result.Fotos;
        for (k in obj.img) {
          var item = obj.img[k];
          arr.push({
            cod: item.cod[0],
            name: item.name[0],
            url: item.url[0],
            descrip: item.descrip[0]
          });
        }
        resolve(arr);
      });
    });
  }

}