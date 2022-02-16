import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { DataServerService } from '../service/dataServer/data-server.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  id:number = 0
  titulo:string = ""
  nombre:string = ""
  apellido:string = ""
  about:string = ""
  fotoPerfil: string = ""
  imgEdit:any
  nombreNewImagen:string = ""
  constructor( private auth: AuthService, private dataAboutMe: DataServerService) { }

  ngOnInit(): void {
    this.dataAboutMe.getUserData().subscribe(val => {
      val.sobreMi.map(sm => {
        this.id=sm.id
        this.nombre = sm.nombre
        this.apellido = sm.apellido
       this.fotoPerfil = sm.fotoperfil
        this.about = sm.sobreMi
        this.titulo = sm.titulo
      })
    })
  }

  authService(){
    return this.auth.logIn()
  }

  onSubmit(){
    const newData = {
      titulo: this.titulo,
      nombre: this.nombre,
     apellido: this.apellido,
      sobreMi: this.about,
    }
  this.dataAboutMe.editSobreMi(this.id, newData, this.imgEdit, this.nombreNewImagen)

  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {

      const reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.imgEdit = (<FileReader>event.target).result;
      }
  
      reader.readAsArrayBuffer(event.target.files[0])
     
      this.nombreNewImagen = event.target.files[0].name 
      // reader.readAsDataURL(event.target.files[0]);
    }
  }

 
 
}
