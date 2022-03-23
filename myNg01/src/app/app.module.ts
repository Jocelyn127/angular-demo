import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  MyNgComponent01 } from './my01';
import { My02Component } from './my02';
import { MyC03Component } from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';
import { MyDirectiveComponent } from './my-directive/my-directive.component';
import { FormsModule } from '@angular/forms';
import { CustomDirectiveDirective } from './my-directive/custom-directive.directive';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ConvertPipe } from './convert.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MyServiceComponent } from './my-service/my-service.component';
import { LogService } from './todo-list/todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    MyNgComponent01,
    My02Component,
    MyC03Component,
    Myc04Component,
    MyDirectiveComponent,
    CustomDirectiveDirective,
    TodoListComponent,
    ConvertPipe,
    MyServiceComponent
  ],
  imports: [
    BrowserModule,  // web项目必须导入浏览器模块， 里面包含CommonModule(包含ngIf, ngFor, 不包含ngModel)
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
