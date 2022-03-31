import { Component, OnInit } from '@angular/core';
import { DataServerService } from '../service/dataServer/data-server.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  id?:number
  
  constructor(private dat: DataServerService) { }

  ngOnInit(): void {
    this.dat.getUserData().subscribe(val => {
     this.id = val.id
    })
  
  }


}
