import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { DataServerService } from '../../service/dataServer/data-server.service';

type educacion = {
  id: number,
  formacion: string,
  foto:string,
  institucion: string,
  realizacion: string
}
@Component({
  selector: 'app-item-education',
  templateUrl: './item-education.component.html',
  styleUrls: ['./item-education.component.css']
})
export class ItemEducationComponent implements OnInit {

  @Input() edu:educacion = {
   id: 0,
    institucion: "",
    foto:"",
  formacion: "",
  realizacion: ""
  }
  institucion?:string
  formacion?:string 
  realizacion?:string 
  imgEdit:any
  nombreNewImagen: string = ""
  constructor(private auth: AuthService, private editeducacion: DataServerService) { }

  ngOnInit(): void {
  }

  authService(){
    return this.auth.logIn()
  }

  onSubmit(){
    const edit = {
      institucion : this.institucion,
      formacion : this.formacion,
      realizacion : this.realizacion
    }
    this.editeducacion.editarEducacion(this.edu.id, edit, this.imgEdit, this.nombreNewImagen)
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
