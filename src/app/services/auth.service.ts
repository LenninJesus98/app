import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3000/api'

  constructor(private http:HttpClient, private router:Router) { }

  signUp(user){
    return this.http.post<any>(this.URL+'/register',user);
  }

  signIn(user){
    return this.http.post<any>(this.URL+'/login',user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('item');
  }

  logout(){
    localStorage.removeItem('token');
    //despues de cerrar sesion ira a la pagina login o tambien al home depende del gusto
    this.router.navigate(['./login']);
  }


}
