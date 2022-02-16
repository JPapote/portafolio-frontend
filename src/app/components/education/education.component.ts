import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { DataServerService } from '../service/dataServer/data-server.service';

type educacion = [{
  id: number,
  formacion: string,
  foto:string,
  institucion: string,
  realizacion: string
}]
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educ:educacion = [{
    id: 0,
    formacion: "",
    foto: "",
    institucion: "",
    realizacion: ""
  }]
 
  constructor(private dataEducacion: DataServerService) { }

  ngOnInit(): void {
    this.educ.pop()
    this.dataEducacion.getUserData().subscribe(val => {
      val.educacion.map(ed => {
       this.educ.push(ed)
      })
    })
  }
  
}
