import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { DataServerService } from '../service/dataServer/data-server.service';

type proyecto = [{
  id:number,
  nombre: string,
  realizacion: string,
  descripcion: string,
  link:string
}]
@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  projec: proyecto = [{
    id: 0,
    nombre: "",
    realizacion: "",
    descripcion: "",
    link: ""
  }]
  constructor(private auth: AuthService, private dataskillsdb: DataServerService) { }

  ngOnInit(): void {
    this.projec.pop()
     this.dataskillsdb.getUserData().subscribe(val => {
      val.proyecto.map(val => {
        this.projec.push(val)
      })
    }) 
  }



}
