import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-directive',
  templateUrl: './my-directive.component.html',
  styleUrls: ['./my-directive.component.scss']
})
export class MyDirectiveComponent implements OnInit {
  list = ['hello', 'world'];
  isShow = true;
  age = 1;
  hasMore = true;
  userLevel = 'normal';
  uname = 'hello';
  username = '';
  notice = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  loadMore() {
    this.hasMore = false;
  }

  doChange() {
    console.log(this.uname);
  }

  validator() {
    if (this.username.length < 6) {
      this.notice = 'too short';
    }else if (this.username.length > 10) {
      this.notice = 'too long';
    }
  }

}
