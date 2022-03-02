import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { DataServerService } from '../../service/dataServer/data-server.service';


type experiencia= {actividad: string,
  empresa: string,
  foto: string,
  id: number,
  periodo: string}
@Component({
  selector: 'app-item-experience',
  templateUrl: './item-experience.component.html',
  styleUrls: ['./item-experience.component.css']
})
export class ItemExperienceComponent implements OnInit {

   @Input() expe: experiencia =  {
    actividad: "",
  empresa: "",
  foto: "",
  id: 0,
  periodo: ""
}
  actividad?:string 
  empresa?:string 
  periodo?:string
  imgEdit:any
  nombreNewImagen=""
  constructor(private auth: AuthService, private editarExperiencia: DataServerService) { }

  ngOnInit(): void {
    
  }
  authService(){
    return this.auth.logIn()
  }

 
  onSubmit(){
    const experienciaEdita = {
       actividad : this.actividad,
       empresa : this.empresa,
       periodo: this.periodo,
    }
    this.editarExperiencia.editarExperiencia(this.expe.id, experienciaEdita, this.imgEdit, this.nombreNewImagen).subscribe(val => {
      console.log(val.type.toString())
     })
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
  deleteExperiencia(elementID:number){
    this.editarExperiencia.deleteDataExperiencia(elementID)
  }
}
