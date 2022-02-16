import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { DataServerService } from '../../service/dataServer/data-server.service';

type proyecto = {
  id:number,
  nombre: string,
  realizacion: string,
  descripcion: string,
  link:string
}
@Component({
  selector: 'app-item-projects',
  templateUrl: './item-projects.component.html',
  styleUrls: ['./item-projects.component.css']
})
export class ItemProjectsComponent implements OnInit {

  @Input() pro:proyecto = {
    id:0,
    descripcion:"",
  realizacion: "",
  nombre:"",
  link: ""
  }
  descripcion?:string
  realizacion?:string
  nombre?:string
  link?:string
  constructor(private auth: AuthService, private editProyec: DataServerService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const edit = {
      descripcion: this.descripcion,
      realizacion: this.realizacion,
      nombre: this.nombre,
      link: this.link
    }
    this.editProyec.editProyecto(this.pro.id, edit)

  }
  authService(){
    return this.auth.logIn()
  }

}
