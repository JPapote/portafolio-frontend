import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string = ""
  password:string = ""
  success?:boolean
  danger?:boolean
  constructor(private auth: AuthService, private router: Router) { }

  
  ngOnInit(): void {
  }
  onSubmit(){
    
     this.auth.login(this.name, this.password).subscribe((res: any) => { 
       this.danger = false
       this.success = true

      localStorage.setItem('auth_token', res.token)
      this.router.navigate(['/inicio']);
      
    }, error => {
     
        this.danger = true
    })
  }
}
