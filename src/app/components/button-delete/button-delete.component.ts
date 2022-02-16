import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.css']
})
export class ButtonDeleteComponent implements OnInit {

  @Input() elementID?:number
  constructor() { }

  ngOnInit(): void {
  }

 
}
