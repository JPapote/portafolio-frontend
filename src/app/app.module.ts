import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { HardAndSoftSkillsComponent } from './components/hard-and-soft-skills/hard-and-soft-skills.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoginComponent } from './components/login/login.component';
import {AppRouting} from './app-routing/app-routing.module'
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ButtonDeleteComponent } from './components/button-delete/button-delete.component';
import { ButtonEditComponent } from './components/button-edit/button-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemExperienceComponent } from './components/experience/item-experience/item-experience.component';
import { ItemHardAndSoftComponent } from './components/hard-and-soft-skills/item-hard-and-soft/item-hard-and-soft.component';
import { ItemProjectsComponent } from './components/my-projects/item-projects/item-projects.component';
import { ItemEducationComponent } from './components/education/item-education/item-education.component';

import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    HardAndSoftSkillsComponent,
    MyProjectsComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    ButtonDeleteComponent,
    ButtonEditComponent,
    ItemExperienceComponent,
    ItemHardAndSoftComponent,
    
    ItemProjectsComponent,
         ItemEducationComponent,
         SpinnerComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    
    
    FormsModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "titleFontSize": "1rem",
      "innerStrokeWidth": 10,
      "subtitle":"",
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
