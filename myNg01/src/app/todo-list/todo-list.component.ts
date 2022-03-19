import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoItems: string[] = [];
  todoItem: string = '';
  employees: any[] = [{ id: 1, name: 'hello', age: 15, salary: 5000.1234 }, { id: 3, name: 'world', age: 21, salary: 900 }];
  constructor() { }

  ngOnInit(): void {
  }
  changeItem() {

  }
  add() {
    this.todoItems.push(this.todoItem);
    this.todoItem = '';
  }
  remove(item: number) {
    this.todoItems.splice(item, 1);
  }

  removeItem(item: number) {
    this.employees.splice(item, 1);
  }
}
