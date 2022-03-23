import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-blog-parent',
  templateUrl: './my-blog-parent.component.html',
  styleUrls: ['./my-blog-parent.component.scss']
})
export class MyBlogParentComponent implements OnInit {
  public userName: string = 'Hello'
  constructor() { }

  ngOnInit(): void {
  }

  doChildEmit(data: string){
    this.userName = data;
  }
}
