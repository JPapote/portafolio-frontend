import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = 'https://localhost:8080/authenticate';

  token:string | undefined;

  constructor( private router: Router) { }

  login(name:string, password:string){
    //this.http.post(this.url, {name, password}).subscribe((res: any) => {
      console.log(name, password)
      this.router.navigate(['/home']);
      localStorage.setItem('auth_token', "esto es un token xd")
    //})
}

  logout(){
    localStorage.removeItem('auth_token')
  }

  //Para seber si existe la session
  logIn(){
    return (localStorage.getItem('auth_token') !== null)
  }
}
