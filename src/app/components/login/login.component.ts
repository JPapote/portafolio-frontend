import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string = ""
  password:string = ""


  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    
      this.auth.login(this.name, this.password)
    
  }

}
