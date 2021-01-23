import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from "./services/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{

    //nuevo metodo unir style.css
    constructor(public sanitizer: DomSanitizer,
      public authService: AuthService) {
      
    }
  title = 'Lennon Store';
  cssUrl: string;

  //nuevo metodo unir style.css

}

