import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   ngOnInit(): void {
  }

  
  cssUrl: string;

  //nuevo metodo unir style.css
  constructor(public sanitizer: DomSanitizer) {
    this.cssUrl = '/assets/css/styles.css';
  }
}
