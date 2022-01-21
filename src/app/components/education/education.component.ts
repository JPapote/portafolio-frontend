import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  authService(){
    return this.auth.logIn()
  }
}
