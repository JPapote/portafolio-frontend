import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private auth: AuthService) { }

  ngOnInit(): void {
  }

  authService(){
    return this.auth.logIn()
  }

}
