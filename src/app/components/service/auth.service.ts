import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

type sobreMi=[{
  id:number,
  nombre: string,
  apellido: string,
  fotoperfil: string,
  sobreMi: string,
  titulo: string,
  correo: string, 
  telefono: number
}]
type usuario = 
{
hdb: [],
id: number,
nombre: string,
password: string,
educacion: [],
experiencia:[],
fotobaner: string,
proyecto: [],
sobreMi: sobreMi
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = 'http://localhost:8080/authenticate';

  token:string | undefined;

  constructor(private http:HttpClient, private router: Router) { }

  login(name:string, password:string){
    this.http.post(this.url, {username:name, password:password}).subscribe((res: any) => {
      console.log("name: " + name + " password: " + password)
      console.log("token: " + res.token.status)
      console.log("token: " + res.status)
      localStorage.setItem('auth_token', res.token)
      this.router.navigate(['/home']);
    })
}

  logout(){
    console.log(localStorage.getItem('auth_token'))
    localStorage.removeItem('auth_token')
  }

  //Para seber si existe la session
  logIn(){
    return (localStorage.getItem('auth_token') !== null)
  }
}
