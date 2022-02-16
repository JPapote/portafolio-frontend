import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { DataServerService } from '../service/dataServer/data-server.service';


type hdb = [{
  id:number,
  nombre:string,
  nivel: number
}]
@Component({
  selector: 'app-hard-and-soft-skills',
  templateUrl: './hard-and-soft-skills.component.html',
  styleUrls: ['./hard-and-soft-skills.component.css']
})
export class HardAndSoftSkillsComponent implements OnInit {

  skill: hdb = [{
    id:0,
    nivel: 0,
  nombre: ''
  }]
  
  constructor(private dataskillsdb: DataServerService) { }

  ngOnInit(): void {
    this.skill.pop()
    this.dataskillsdb.getUserData().subscribe(val => {
      val.hdb.map(s => {
        this.skill.push(s)
        
      })      
    }) 
  }

 
}
