import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { DataServerService } from '../../service/dataServer/data-server.service';

type hdb = {
  id:number,
  nombre:string,
  nivel: number
}

@Component({
  selector: 'app-item-hard-and-soft',
  templateUrl: './item-hard-and-soft.component.html',
  styleUrls: ['./item-hard-and-soft.component.css']
})
export class ItemHardAndSoftComponent implements OnInit {

  @Input() hss:hdb = {
    id:0,
    nombre: '',
    nivel: 0 
  }
  nombre?:string
  nivel?: number
  constructor(private auth: AuthService, private hdb: DataServerService) { }

  ngOnInit(): void {
    
  }

  deleteHdb(elementID:number){
    this.hdb.deleteDataHdb(elementID)
  }

  onSubmit(event:any){

    const newData =  {
  
  nombre: this.nombre,
  nivel: this.nivel
}
    this.hdb.editHardAndSoftSkills(this.hss.id, newData)
  }
  
  authService(){
    return this.auth.logIn()
  }
}
