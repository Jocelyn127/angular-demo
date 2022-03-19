import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc04',
  templateUrl: './myc04.component.html',
  styleUrls: ['./myc04.component.scss']
})
export class Myc04Component implements OnInit {
  name: string = 'hello';
  age: number = 20;
  count: number = 1; 
  imgUrl = '../../assets/1.jpg';
  constructor() { }

  ngOnInit(): void {
  }
  print() {
    alert('username is hello');
  }
  reduceCount() {
    this.count--;
  }
  increaseCount() {
    this.count++;
  }
  
}
