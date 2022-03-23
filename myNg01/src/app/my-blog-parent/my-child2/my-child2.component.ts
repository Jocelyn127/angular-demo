import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-child2',
  templateUrl: './my-child2.component.html',
  styleUrls: ['./my-child2.component.scss']
})
export class MyChild2Component implements OnInit {
  @Input() child2Name: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
