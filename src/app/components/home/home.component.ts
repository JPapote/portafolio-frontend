import { Component, OnInit } from '@angular/core';
import { DataServerService } from '../service/dataServer/data-server.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  
  constructor(private img: DataServerService) { }

  ngOnInit(): void {
 
  
  
  }


}
