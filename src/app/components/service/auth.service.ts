import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment'

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
  url:string = environment.urlGlobal + "authenticate";

  token:string | undefined;

  constructor(private http:HttpClient, private router: Router) { }

  login(name:string, password:string){
    return   this.http.post(this.url, {username:name, password:password})
}

  logout(){
   
    localStorage.removeItem('auth_token')
  }

  //Para seber si existe la session
  logIn(){
    return (localStorage.getItem('auth_token') !== null)
  }
}
