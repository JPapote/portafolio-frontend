import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

import { DataServerService } from '../service/dataServer/data-server.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  id:number = 0
  img:string = ""
  newImg:any
  nombreNewImagen:string = ""
  constructor(private auth: AuthService, private dataUser: DataServerService) { }

  ngOnInit(): void {
    this.dataUser.getUserData().subscribe(val => {
      this.img = val.fotobaner
      this.id = val.id
    })
  }

onSubmit(){
   
  this.dataUser.editImagenHeader(this.id, this.newImg, this.nombreNewImagen)
}
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {

      const reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.newImg = (<FileReader>event.target).result;
      }
  
      reader.readAsArrayBuffer(event.target.files[0])
     
      this.nombreNewImagen = event.target.files[0].name 
  
    }
  }

  authService(){
    return this.auth.logIn()
  }

  logout(){
    this.auth.logout();
  }

}
