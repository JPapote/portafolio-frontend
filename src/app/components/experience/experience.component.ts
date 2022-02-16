import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { DataServerService } from '../service/dataServer/data-server.service';


type experiencia= [{actividad: string,
  empresa: string,
  foto: string,
  id: number,
  periodo: string}]
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  exp:experiencia = [{

    actividad: "",
  empresa: "",
  foto: "",
  id: 0,
  periodo: ""
  }]
 
  constructor(private auth: AuthService, private dataExperiencia: DataServerService) { }

  ngOnInit(): void {
  this.exp.pop()
    this.dataExperiencia.getUserData().subscribe( val => {
         val.experiencia.map(exper => {
           this.exp.push(exper)
        
    })
   })
    // console.log(this.dataExperiencia.getExp())
    // this.actividad = this.dataExperiencia.getExp().actividad
    // this.empresa = this.dataExperiencia.getExp().empres
    // this.empresa = this.dataExperiencia.getExp().periodo
  }
  authService(){
    return this.auth.logIn()
  }

 
}
