import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-hard-and-soft-skills',
  templateUrl: './hard-and-soft-skills.component.html',
  styleUrls: ['./hard-and-soft-skills.component.css']
})
export class HardAndSoftSkillsComponent implements OnInit {

  
  constructor(private auth: AuthService) { }

  ngOnInit(): void {

  }
  authService(){
    return this.auth.logIn()
  }
}
