import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {environment} from '../../../../environments/environment'
// import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';

type hdb = [{
  id:number,
  nombre:string,
  nivel: number
}]
type educacion = [{
  id: number,
  formacion: string,
  foto:string,
  institucion: string,
  realizacion: string
}]

type proyecto = [{
  id:number,
  nombre: string,
  realizacion: string,
  descripcion: string,
  link:string
}]
  type experiencia= [{actividad: string,
    empresa: string,
    foto: string,
    id: number,
    periodo: string}]

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

export class DataServerService {

  constructor(private http: HttpClient) { }
 

  getUserData():Observable<usuario>{
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json') 
      .set("Access-Control-Allow-Origin", "*")
      .set("Access-Control-Allow-Methods", "GET")
      .set('Access-Control-Allow-Credentials', 'true')
      .set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
    .append('content-type','application/x-www-form-urlencoded')
    
    const user = this.http.get<usuario>(environment.urlGlobal+"traerUser/1", { headers: headers })
    return user
    

  }
  
  editHardAndSoftSkills(id: number, newData:{}) {
    const token = localStorage.getItem('auth_token')
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json') 
    .set("Authorization", "Bearer " + token)
  

    const hsk = this.http.put(environment.urlGlobal+"editarHdb/"+id, newData, {headers})
    // /editarHdb/{id}
    hsk.subscribe(val => {
      console.log(val)
    })

  }

  editImagenHeader(id: number, nuevaImg:any, nombreImagen:string):Observable<HttpEvent<any>>{
    
    const token = localStorage.getItem('auth_token')  
    const form:FormData= new FormData();
    const filaBlob = new Blob([nuevaImg])
      form.append("file", filaBlob)
      form.append("nombreNewImagen", nombreImagen)
    let headers = new HttpHeaders()
    // .set("Accept", "application/json")
    .set("Authorization", "Bearer " + token)
    // .append("Content-Type", "application/x-www-form-urlencoded") 
      const request = new HttpRequest("PUT",environment.urlGlobal+"editarBanner/"+id, form, {
        headers
          
        })
    
      return this.http.request(request)
  }
  
  


  editSobreMi(id:number, newData:{}, editImg: any, nombrenewImagen:string):Observable<HttpEvent<any>>{
    // const fileName = new Blob([editImg])
    const token = localStorage.getItem('auth_token')  
    const form:FormData= new FormData();
    const filaBlob = new Blob([editImg])
      form.append("file", filaBlob)
      form.append("sobreMi", JSON.stringify(newData))
      form.append("nombreNewImagen", nombrenewImagen)
    let headers = new HttpHeaders()
    .set("Accept", "application/json")
    .set("Authorization", "Bearer " + token)
    // .append("Content-Type", "application/x-www-form-urlencoded") 
      const request = new HttpRequest("PUT",environment.urlGlobal+"editarSobreMi/"+id, form, {
        headers
          
        })
    
      return this.http.request(request)
  }

  editarExperiencia(id:number, experienciaEdit:{}, imgEdit:any, nombreNewImagen:string ){
    const token = localStorage.getItem('auth_token')  
    const form:FormData= new FormData();
    const filaBlob = new Blob([imgEdit])
      form.append("file", filaBlob)
      form.append("experiencia", JSON.stringify(experienciaEdit))
      form.append("nombreNewImagen", nombreNewImagen)
    let headers = new HttpHeaders()
    .set("Accept", "application/json")
    .set("Authorization", "Bearer " + token)
    // .append("Content-Type", "application/x-www-form-urlencoded") 
      const request = new HttpRequest("PUT",environment.urlGlobal+"editarExperiencia/"+id, form, {
        headers
          
        })
    
      return this.http.request(request)
  }

  editarEducacion(id: number, educacionEdit:{}, imgEdit:any, nombreNewImagen: string){
    const token = localStorage.getItem('auth_token')  
    const form:FormData= new FormData();
    const filaBlob = new Blob([imgEdit])
      form.append("file", filaBlob)
      form.append("educacion", JSON.stringify(educacionEdit))
      form.append("nombreNewImagen", nombreNewImagen)
    let headers = new HttpHeaders()
    .set("Accept", "application/json")
    .set("Authorization", "Bearer " + token)
    // .append("Content-Type", "application/x-www-form-urlencoded") 
      const request = new HttpRequest("PUT",environment.urlGlobal+"editarEducacion/"+id, form, {
        headers
          
        })
    
      return this.http.request(request)
  }

  editProyecto(id:number, newData:{}){
    const token = localStorage.getItem('auth_token')
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json') 
    .set("Authorization", "Bearer " + token)
  

    const hsk = this.http.put(environment.urlGlobal+"editarProyecto/"+id, newData, {headers})
    
  }
  deleteDataHdb(id: number) {
    const token = localStorage.getItem('auth_token')
    let headers = new HttpHeaders()
    .set("Authorization", "Bearer " + token)
    const hdb = this.http.delete(environment.urlGlobal+"borrarInfoHdb/"+id, {headers})
   
  }

  deleteDataExperiencia(id: number) {
    const token = localStorage.getItem('auth_token')
    let headers = new HttpHeaders()
    .set("Authorization", "Bearer " + token)
    const exp = this.http.delete(environment.urlGlobal+"borrarInfoExperiencia/"+id, {headers})
   
  }

  deleteDataEducacion(id: number) {
    const token = localStorage.getItem('auth_token')
    let headers = new HttpHeaders()
    .set("Authorization", "Bearer " + token)
    const educ = this.http.delete(environment.urlGlobal+"borrarInfoEducacion/"+id, {headers})
   
  }
  deleteDataProyecto(id: number) {
    const token = localStorage.getItem('auth_token')
    let headers = new HttpHeaders()
    .set("Authorization", "Bearer " + token)
    const proyect = this.http.delete(environment.urlGlobal+"borrarInfoProyecto/"+id, {headers})
   
  }
}
