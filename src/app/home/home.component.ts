import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount:number=4
  additem:string=`Add new item`
  goalText: string=`My Frist Life Goal`

  goals =[];

  constructor() { }

  ngOnInit() {
  }
  additems(){
    this.goals.push(this.goalText);
    this.goalText = ''
  }
}
