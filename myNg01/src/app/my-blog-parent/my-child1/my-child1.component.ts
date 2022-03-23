import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-child1',
  templateUrl: './my-child1.component.html',
  styleUrls: ['./my-child1.component.scss']
})
export class MyChild1Component implements OnInit {
  public userInput: string = '';

  // 事件发射器，输出型属性，可以向父组件输出数据
  @Output() private childEmitEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateName(){
    // 子组件把数据发给父组件
    this.childEmitEvent.emit(this.userInput);
  }

}
